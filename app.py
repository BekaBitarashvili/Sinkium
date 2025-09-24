from flask import Flask, render_template, request, jsonify, redirect, url_for, session
import os
from datetime import datetime
import json

app = Flask(__name__)
app.secret_key = 'sinkium-secret-key-2025'

# Configuration
app.config['DEBUG'] = True
app.config['TEMPLATES_AUTO_RELOAD'] = True

# Sample data for demonstration
users_db = {}  # In production, use a real database
conversations_db = []
newsletter_subscribers = []


@app.route('/')
def index():
    """Main landing page"""
    return render_template('index.html')


@app.route('/login')
def login():
    """Login page"""
    return render_template('login.html')


@app.route('/register')
def register():
    """Registration page"""
    return render_template('register.html')


@app.route('/api/login', methods=['POST'])
def api_login():
    """Handle login API request"""
    try:
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')

        if not email or not password:
            return jsonify({
                'success': False,
                'message': 'Email and password are required'
            }), 400

        # Check if user exists (in production, verify password hash)
        if email in users_db and users_db[email]['password'] == password:
            session['user_email'] = email
            session['user_id'] = users_db[email]['id']

            return jsonify({
                'success': True,
                'message': 'Login successful',
                'user': {
                    'email': email,
                    'name': users_db[email].get('name', '')
                }
            })
        else:
            return jsonify({
                'success': False,
                'message': 'Invalid email or password'
            }), 401

    except Exception as e:
        return jsonify({
            'success': False,
            'message': 'Server error occurred'
        }), 500


@app.route('/api/register', methods=['POST'])
def api_register():
    """Handle registration API request"""
    try:
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')
        name = data.get('name', '')

        if not email or not password:
            return jsonify({
                'success': False,
                'message': 'Email and password are required'
            }), 400

        # Check if user already exists
        if email in users_db:
            return jsonify({
                'success': False,
                'message': 'User with this email already exists'
            }), 400

        # Create new user (in production, hash the password)
        user_id = len(users_db) + 1
        users_db[email] = {
            'id': user_id,
            'email': email,
            'password': password,  # In production, use hashed password
            'name': name,
            'created_at': datetime.now().isoformat(),
            'plan': 'starter'
        }

        session['user_email'] = email
        session['user_id'] = user_id

        return jsonify({
            'success': True,
            'message': 'Registration successful',
            'user': {
                'id': user_id,
                'email': email,
                'name': name
            }
        })

    except Exception as e:
        return jsonify({
            'success': False,
            'message': 'Server error occurred'
        }), 500


@app.route('/api/newsletter', methods=['POST'])
def api_newsletter():
    """Handle newsletter subscription"""
    try:
        data = request.get_json()
        email = data.get('email')

        if not email:
            return jsonify({
                'success': False,
                'message': 'Email is required'
            }), 400

        # Check if already subscribed
        if email not in newsletter_subscribers:
            newsletter_subscribers.append({
                'email': email,
                'subscribed_at': datetime.now().isoformat()
            })

        return jsonify({
            'success': True,
            'message': 'Successfully subscribed to newsletter'
        })

    except Exception as e:
        return jsonify({
            'success': False,
            'message': 'Server error occurred'
        }), 500


@app.route('/api/chat', methods=['POST'])
def api_chat():
    """Handle chat messages (demo functionality)"""
    try:
        data = request.get_json()
        message = data.get('message')
        user_id = session.get('user_id')

        if not message:
            return jsonify({
                'success': False,
                'message': 'Message is required'
            }), 400

        # Simple AI response simulation
        ai_responses = [
            "Hello! I'm Sinkium AI. How can I help you today?",
            "I understand your query. Let me provide you with the best solution.",
            "That's a great question! Our AI chatbot can handle that efficiently.",
            "I'm here to assist you 24/7. What would you like to know?",
            "Our intelligent system is designed to understand and adapt to your needs."
        ]

        import random
        ai_response = random.choice(ai_responses)

        # Store conversation
        conversation = {
            'id': len(conversations_db) + 1,
            'user_id': user_id,
            'user_message': message,
            'ai_response': ai_response,
            'timestamp': datetime.now().isoformat()
        }
        conversations_db.append(conversation)

        return jsonify({
            'success': True,
            'response': ai_response,
            'conversation_id': conversation['id']
        })

    except Exception as e:
        return jsonify({
            'success': False,
            'message': 'Server error occurred'
        }), 500


@app.route('/api/user/profile')
def api_user_profile():
    """Get user profile information"""
    if 'user_email' not in session:
        return jsonify({
            'success': False,
            'message': 'User not authenticated'
        }), 401

    email = session['user_email']
    if email in users_db:
        user = users_db[email]
        return jsonify({
            'success': True,
            'user': {
                'id': user['id'],
                'email': user['email'],
                'name': user.get('name', ''),
                'plan': user.get('plan', 'starter'),
                'created_at': user['created_at']
            }
        })

    return jsonify({
        'success': False,
        'message': 'User not found'
    }), 404


@app.route('/api/conversations')
def api_conversations():
    """Get user's conversation history"""
    user_id = session.get('user_id')
    if not user_id:
        return jsonify({
            'success': False,
            'message': 'User not authenticated'
        }), 401

    user_conversations = [
        conv for conv in conversations_db
        if conv.get('user_id') == user_id
    ]

    return jsonify({
        'success': True,
        'conversations': user_conversations
    })


@app.route('/api/stats')
def api_stats():
    """Get platform statistics"""
    return jsonify({
        'success': True,
        'stats': {
            'total_users': len(users_db),
            'total_conversations': len(conversations_db),
            'newsletter_subscribers': len(newsletter_subscribers),
            'accuracy': 99,
            'uptime': 99.9,
            'response_time': 0.8
        }
    })


@app.route('/dashboard')
def dashboard():
    """User dashboard (requires authentication)"""
    if 'user_email' not in session:
        return redirect(url_for('login'))

    # In a real application, render a dashboard template
    return jsonify({
        'message': 'Dashboard coming soon!',
        'user': session['user_email']
    })


@app.route('/logout')
def logout():
    """Logout user"""
    session.clear()
    return redirect(url_for('index'))


@app.errorhandler(404)
def not_found(error):
    """Handle 404 errors"""
    return jsonify({
        'success': False,
        'message': 'Page not found'
    }), 404


@app.errorhandler(500)
def internal_error(error):
    """Handle 500 errors"""
    return jsonify({
        'success': False,
        'message': 'Internal server error'
    }), 500


# Custom template filters
@app.template_filter('datetime')
def datetime_filter(value):
    """Format datetime for templates"""
    if isinstance(value, str):
        try:
            value = datetime.fromisoformat(value.replace('Z', '+00:00'))
        except:
            return value
    return value.strftime('%Y-%m-%d %H:%M')


# Context processors
@app.context_processor
def inject_globals():
    """Inject global variables into templates"""
    return {
        'current_year': datetime.now().year,
        'app_name': 'Sinkium',
        'app_version': '1.0.0'
    }


if __name__ == '__main__':
    # Create templates directory if it doesn't exist
    if not os.path.exists('templates'):
        os.makedirs('templates')

    # Create static directories if they don't exist
    for directory in ['static', 'static/css', 'static/js', 'static/images']:
        if not os.path.exists(directory):
            os.makedirs(directory)

    # Initialize some demo data
    users_db['demo@sinkium.com'] = {
        'id': 1,
        'email': 'demo@sinkium.com',
        'password': 'demo123',  # In production, use hashed passwords
        'name': 'Demo User',
        'created_at': datetime.now().isoformat(),
        'plan': 'pro'
    }

    print("🚀 Sinkium Server Starting...")
    print("📧 Demo Login: demo@sinkium.com / demo123")
    print("🌐 Server running on http://localhost:5000")

    app.run(debug=True, host='0.0.0.0', port=5000)