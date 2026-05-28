import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка письма с формы обратной связи на почту fiffifa2024@gmail.com"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': ''
        }

    body = json.loads(event.get('body', '{}'))
    name = body.get('name', '').strip()
    email = body.get('email', '').strip()
    message = body.get('message', '').strip()

    if not name or not email or not message:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
            'body': {'error': 'Заполните все поля'}
        }

    gmail_user = 'fiffifa2024@gmail.com'
    gmail_password = os.environ['GMAIL_APP_PASSWORD']

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новое сообщение с сайта SkillCore от {name}'
    msg['From'] = gmail_user
    msg['To'] = gmail_user
    msg['Reply-To'] = email

    html = f"""
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0B0F1A; color: #ffffff; padding: 32px; border-radius: 16px;">
        <div style="background: linear-gradient(135deg, #00DAC8, #A855F7); padding: 2px; border-radius: 12px; margin-bottom: 24px;">
            <div style="background: #111827; padding: 20px 24px; border-radius: 11px;">
                <h1 style="margin: 0; font-size: 22px; color: #ffffff;">SkillCore — новое сообщение</h1>
            </div>
        </div>
        <table style="width: 100%; border-collapse: collapse;">
            <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #1F2937; color: #9CA3AF; width: 100px;">Имя</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #1F2937; color: #ffffff; font-weight: 600;">{name}</td>
            </tr>
            <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #1F2937; color: #9CA3AF;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #1F2937; color: #00DAC8;">{email}</td>
            </tr>
        </table>
        <div style="margin-top: 24px; padding: 20px; background: #1F2937; border-radius: 12px; border-left: 3px solid #00DAC8;">
            <p style="margin: 0 0 8px; color: #9CA3AF; font-size: 13px;">Сообщение:</p>
            <p style="margin: 0; color: #ffffff; line-height: 1.6;">{message}</p>
        </div>
        <p style="margin-top: 24px; color: #4B5563; font-size: 12px; text-align: center;">
            Чтобы ответить, напишите на: {email}
        </p>
    </div>
    """

    msg.attach(MIMEText(html, 'html'))

    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
        smtp.login(gmail_user, gmail_password)
        smtp.sendmail(gmail_user, gmail_user, msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': {'success': True}
    }