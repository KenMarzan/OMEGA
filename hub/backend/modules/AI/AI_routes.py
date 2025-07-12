from flask import Blueprint, request, jsonify
import google.generativeai as genai
import os
import re

AI_bp = Blueprint('AI', __name__)

# Configure Gemini AI
API_KEY = os.environ.get('GEMINI_API_KEY', "AIzaSyBD8ucrUeI2jLsoxBjf9hbo7QkuPZ7Uxc4")
genai.configure(api_key=API_KEY)
model = genai.GenerativeModel("gemini-1.5-flash")

def format_ai_response(text):
    """
    Format AI response by removing asterisks, properly formatting text, and creating new lines per sentence
    """
    if not text:
        return text
    
    # Remove asterisks used for bold formatting
    text = re.sub(r'\*\*(.*?)\*\*', r'\1', text)  # Remove **bold**
    text = re.sub(r'\*(.*?)\*', r'\1', text)      # Remove *italic*
    
    # Clean up multiple asterisks
    text = re.sub(r'\*+', '', text)
    
    # Split into lines and process each line
    lines = text.split('\n')
    formatted_lines = []
    
    for line in lines:
        line = line.strip()
        if not line:
            formatted_lines.append('')
            continue
            
        # Handle numbered lists (1., 2., etc.)
        if re.match(r'^\d+\.', line):
            formatted_lines.append(line)
        # Handle bullet points (-, •, etc.)
        elif line.startswith('-') or line.startswith('•'):
            # Ensure proper spacing for bullet points
            formatted_lines.append(f"  {line}")
        # Handle sub-bullet points (already indented)
        elif line.startswith('  -') or line.startswith('    -'):
            formatted_lines.append(f"    {line.lstrip()}")
        else:
            # Split sentences and put each on a new line
            # Handle common sentence endings
            sentences = re.split(r'(?<=[.!?])\s+(?=[A-Z])', line)
            for sentence in sentences:
                sentence = sentence.strip()
                if sentence:
                    formatted_lines.append(sentence)
    
    # Join lines back together
    formatted_text = '\n'.join(formatted_lines)
    
    # Clean up extra whitespace but preserve intentional line breaks
    formatted_text = re.sub(r'\n\s*\n\s*\n', '\n\n', formatted_text)
    
    return formatted_text.strip()

@AI_bp.route('/chat', methods=['POST'])
def chat():
    try:
        data = request.get_json()
        user_message = data.get('message', '')
        language = data.get('language', 'english').lower()
        
        if not user_message:
            return jsonify({'error': 'Message is required'}), 400
        
        # Create agricultural context for better responses with language support
        if language == 'tagalog':
            agricultural_prompt = f"""
            Ikaw ay isang eksperto sa agrikultura na AI assistant. Magbigay ng kapaki-pakinabang, tumpak, at praktikal na payo tungkol sa pagsasaka, pag-aalaga ng pananim, kalusugan ng lupa, pagkontrol sa peste, panahon, at iba pang paksa sa agrikultura.
            
            Tanong ng user: {user_message}
            
            Mangyaring magbigay ng maikling, kapaki-pakinabang na sagot na nakatuon sa kadalubhasaan sa agrikultura. Sumagot sa wikang Tagalog.
            """
        else:
            agricultural_prompt = f"""
            You are an expert agricultural AI assistant. Provide helpful, accurate, and practical advice about farming, crop management, soil health, pest control, weather considerations, and other agricultural topics.
            
            User question: {user_message}
            
            Please provide a concise, helpful response focused on agricultural expertise.
            """
        
        response = model.generate_content(agricultural_prompt)
        ai_response = format_ai_response(response.text)
        
        return jsonify({
            'success': True,
            'response': ai_response
        })
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@AI_bp.route('/crop-analysis', methods=['POST'])
def crop_analysis():
    try:
        data = request.get_json()
        crop_type = data.get('crop_type', '')
        symptoms = data.get('symptoms', '')
        
        prompt = f"""
        As an agricultural expert, analyze the following crop situation:
        Crop: {crop_type}
        Symptoms/Issues: {symptoms}
        
        Provide:
        1. Possible causes
        2. Recommended solutions
        3. Prevention strategies
        4. When to seek professional help
        """
        
        response = model.generate_content(prompt)
        
        return jsonify({
            'success': True,
            'analysis': format_ai_response(response.text)
        })
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@AI_bp.route('/weather-advice', methods=['POST'])
def weather_advice():
    try:
        data = request.get_json()
        weather_conditions = data.get('weather', '')
        crop_stage = data.get('crop_stage', '')
        
        prompt = f"""
        Provide agricultural advice for these conditions:
        Weather: {weather_conditions}
        Crop Growth Stage: {crop_stage}
        
        Include recommendations for:
        1. Irrigation adjustments
        2. Protection measures
        3. Timing of activities
        4. Risk management
        """
        
        response = model.generate_content(prompt)
        
        return jsonify({
            'success': True,
            'advice': format_ai_response(response.text)
        })
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@AI_bp.route('/pest-identification', methods=['POST'])
def pest_identification():
    try:
        data = request.get_json()
        description = data.get('description', '')
        crop_affected = data.get('crop', '')
        
        prompt = f"""
        Help identify and manage this pest issue:
        Crop: {crop_affected}
        Description: {description}
        
        Provide:
        1. Likely pest identification
        2. Organic control methods
        3. Chemical control options (if necessary)
        4. Prevention strategies
        5. Monitoring recommendations
        """
        
        response = model.generate_content(prompt)
        
        return jsonify({
            'success': True,
            'identification': format_ai_response(response.text)
        })
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500
