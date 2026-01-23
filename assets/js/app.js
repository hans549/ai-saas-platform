// Stats tracking
let stats = { contentCount: 0, imageCount: 0 };

// Login functionality
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === 'demo@business.com' && password === 'demo123') {
        document.getElementById('loginScreen').style.display = 'none';
        document.getElementById('mainApp').style.display = 'block';
        showTool('dashboard');
    } else {
        alert('Invalid credentials. Use demo@business.com / demo123');
    }
});

// Navigation
function showTool(toolName) {
    document.querySelectorAll('.tool-content').forEach(el => el.classList.add('hidden'));
    document.getElementById(toolName).classList.remove('hidden');
    document.querySelectorAll('.nav').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
}

function logout() {
    document.getElementById('loginScreen').style.display = 'flex';
    document.getElementById('mainApp').style.display = 'none';
}

// Content generation
async function generateContent() {
    const audience = document.getElementById('audience').value;
    const contentType = document.getElementById('contentType').value;
    const brief = document.getElementById('contentBrief').value;

    if (!audience || !brief) {
        alert('Please fill in all fields');
        return;
    }

    await new Promise(resolve => setTimeout(resolve, 2000));

    const content = `Subject: Transform Your Business Operations - Proven Results for ${audience}

Dear [Name],

I hope this email finds you well and thriving in your business endeavors.

${brief}

Here's what makes this opportunity particularly relevant for ${audience}:

✓ Immediate Impact: See results within the first 30 days
✓ Proven ROI: Average 300% return on investment
✓ Risk-Free: 100% satisfaction guarantee
✓ Expert Support: Dedicated team to ensure your success

What Our Clients Say:
"This solution transformed our operations completely. We're saving 15 hours per week and our productivity has skyrocketed." - Sarah M., CEO

Limited Time Offer:
For the next 7 days, we're offering an exclusive 30% discount for ${audience} who are ready to take action.

Next Steps:
1. Reply to this email with your biggest operational challenge
2. Schedule a 15-minute discovery call
3. Receive a customized solution proposal within 24 hours

Don't let another week pass struggling with inefficient processes. Your competitors are already moving ahead - make sure you're not left behind.

Best regards,
[Your Name]

P.S. This offer expires in 7 days. Secure your spot today by replying to this email.`;

    document.getElementById('contentOutput').textContent = content;
    document.getElementById('generatedContent').style.display = 'block';

    stats.contentCount++;
    document.getElementById('contentCount').textContent = stats.contentCount;
}

// Image generation
async function generateImage() {
    const prompt = document.getElementById('imagePrompt').value;

    if (!prompt) {
        alert('Please enter an image description');
        return;
    }

    await new Promise(resolve => setTimeout(resolve, 3000));

    const imageUrl = `https://picsum.photos/512/512?random=${Date.now()}`;
    document.getElementById('imageOutput').src = imageUrl;
    document.getElementById('generatedImage').style.display = 'block';

    stats.imageCount++;
    document.getElementById('imageCount').textContent = stats.imageCount;
}

// Email campaign generation
async function generateEmail() {
    const audience = document.getElementById('emailAudience').value;
    const type = document.getElementById('emailType').value;
    const goal = document.getElementById('emailGoal').value;

    if (!audience || !goal) {
        alert('Please fill in all fields');
        return;
    }

    await new Promise(resolve => setTimeout(resolve, 2000));

    const emailContent = `Email Campaign: ${type.charAt(0).toUpperCase() + type.slice(1)} Series

Target Audience: ${audience}
Campaign Goal: ${goal}

Email 1: Welcome & Introduction
Subject: Welcome to [Company Name] - Your Journey Starts Here!

Email 2: Value Delivery
Subject: Here's How We Can Help You Achieve [Specific Goal]

Email 3: Social Proof
Subject: See How [Similar Business] Achieved [Specific Result]

Email 4: Call to Action
Subject: Ready to Get Started? Here's Your Next Step

Email 5: Follow-up
Subject: Don't Miss Out - Limited Time Opportunity

Each email includes:
- Personalized greeting
- Value-driven content
- Clear call-to-action
- Professional signature
- Tracking pixels for analytics

Campaign Timeline: 5 emails over 2 weeks
Expected Open Rate: 25-35%
Expected Click Rate: 5-8%
Expected Conversion: 2-5%`;

    document.getElementById('emailOutput').textContent = emailContent;
    document.getElementById('emailResult').style.display = 'block';

    stats.contentCount++;
    document.getElementById('contentCount').textContent = stats.contentCount;
}

// Social media generation
async function generateSocial() {
    const platform = document.getElementById('socialPlatform').value;
    const topic = document.getElementById('socialTopic').value;
    const message = document.getElementById('socialMessage').value;

    if (!topic || !message) {
        alert('Please fill in all fields');
        return;
    }

    await new Promise(resolve => setTimeout(resolve, 1500));

    const socialContent = `${platform.toUpperCase()} POST

🚀 ${topic} - Game Changer Alert!

${message}

💡 Key Benefits:
• Immediate results
• Easy implementation
• Proven success rate

🎯 Perfect for businesses looking to:
✓ Increase efficiency
✓ Save time and money
✓ Stay competitive

👆 Ready to learn more? Comment "INTERESTED" below!

#${topic.replace(/\s+/g, '')} #BusinessGrowth #Success #Innovation

Best posting time: ${platform === 'linkedin' ? '8-10 AM, Tuesday-Thursday' : platform === 'twitter' ? '9 AM, 1-3 PM daily' : '1-3 PM, Wednesday-Friday'}`;

    document.getElementById('socialOutput').textContent = socialContent;
    document.getElementById('socialResult').style.display = 'block';

    stats.contentCount++;
    document.getElementById('contentCount').textContent = stats.contentCount;
}

// Document generation
async function generateDocument() {
    const type = document.getElementById('docType').value;
    const client = document.getElementById('docClient').value;
    const details = document.getElementById('docDetails').value;

    if (!client || !details) {
        alert('Please fill in all fields');
        return;
    }

    await new Promise(resolve => setTimeout(resolve, 2500));

    const docContent = `${type.toUpperCase().replace('-', ' ')}

Client: ${client}
Date: ${new Date().toLocaleDateString()}
Document ID: DOC-${Date.now()}

${details}

EXECUTIVE SUMMARY
This ${type.replace('-', ' ')} outlines the comprehensive solution designed specifically for ${client}. Our approach combines industry best practices with innovative strategies to deliver measurable results.

SCOPE OF WORK
1. Initial Assessment and Analysis
2. Strategy Development and Planning
3. Implementation and Execution
4. Monitoring and Optimization
5. Reporting and Documentation

DELIVERABLES
• Detailed project timeline
• Regular progress reports
• Final implementation guide
• Training materials
• Ongoing support documentation

INVESTMENT
Total Investment: $X,XXX
Payment Terms: Net 30 days
Project Duration: X weeks

NEXT STEPS
1. Review and approve this ${type.replace('-', ' ')}
2. Sign service agreement
3. Schedule kickoff meeting
4. Begin project implementation

We look forward to partnering with ${client} to achieve exceptional results.

Best regards,
[Your Name]
[Your Title]
[Company Name]`;

    document.getElementById('docOutput').textContent = docContent;
    document.getElementById('docResult').style.display = 'block';

    stats.contentCount++;
    document.getElementById('contentCount').textContent = stats.contentCount;
}

// Voice script generation
async function generateVoice() {
    const type = document.getElementById('voiceType').value;
    const topic = document.getElementById('voiceTopic').value;
    const notes = document.getElementById('voiceNotes').value;

    if (!topic || !notes) {
        alert('Please fill in all fields');
        return;
    }

    await new Promise(resolve => setTimeout(resolve, 2000));

    const voiceContent = `${type.toUpperCase().replace('-', ' ')} SCRIPT

Topic: ${topic}
Duration: 3-5 minutes
Tone: Professional, engaging, conversational

[INTRO - 30 seconds]
Hello and welcome! I'm excited to share with you today about ${topic}. ${notes}

[HOOK - 15 seconds]
Did you know that 87% of businesses struggle with this exact challenge? Well, today we're going to change that.

[MAIN CONTENT - 2-3 minutes]
Let me walk you through the three key points that will transform how you think about ${topic}:

Point 1: The Current Challenge
Most people approach this completely wrong. Here's what they're missing...

Point 2: The Solution
The breakthrough comes when you understand this simple principle...

Point 3: The Results
When you implement this correctly, you'll see immediate improvements in...

[CALL TO ACTION - 30 seconds]
So here's what I want you to do right now. Take the first step by...

[CLOSING - 30 seconds]
Thank you for your time today. Remember, success comes to those who take action. I'll see you in the next one!

PRODUCTION NOTES:
- Speak at 150-160 words per minute
- Pause for 2 seconds between main points
- Emphasize key phrases with vocal variety
- Include background music at 20% volume
- Add intro/outro music stingers`;

    document.getElementById('voiceOutput').textContent = voiceContent;
    document.getElementById('voiceResult').style.display = 'block';

    stats.contentCount++;
    document.getElementById('contentCount').textContent = stats.contentCount;
}

// Audio transcription
function handleAudioUpload() {
    const file = document.getElementById('audioFile').files[0];
    if (!file) return;

    setTimeout(() => {
        const transcription = `Audio Transcription Results

File: ${file.name}
Duration: ${Math.floor(Math.random() * 10) + 5} minutes
Confidence: 95%

Transcript:
Welcome to today's business meeting. We're here to discuss the quarterly results and plan for the upcoming initiatives.

The sales team has exceeded expectations this quarter, achieving 120% of our target. This success can be attributed to our new customer acquisition strategy and improved product offerings.

Key discussion points:
1. Revenue growth of 25% compared to last quarter
2. Customer satisfaction scores improved to 4.8/5
3. New market expansion opportunities identified
4. Technology upgrades scheduled for next month

Action items:
- Follow up with potential clients by Friday
- Prepare detailed market analysis report
- Schedule team training sessions
- Review budget allocations for Q4

The meeting concluded with positive outlook for continued growth and team alignment on strategic objectives.

[End of transcription]

Word count: 127 words
Processing time: 2.3 seconds`;

        document.getElementById('transcriptionText').textContent = transcription;
        document.getElementById('transcriptionResult').style.display = 'block';

        stats.contentCount++;
        document.getElementById('contentCount').textContent = stats.contentCount;
    }, 3000);
}

// Utility functions
function copyContent() {
    const content = document.getElementById('contentOutput').textContent;
    navigator.clipboard.writeText(content).then(() => alert('Content copied to clipboard!'));
}

function downloadContent() {
    const content = document.getElementById('contentOutput').textContent;
    downloadText(content, 'generated-content.txt');
}

function copyEmail() {
    const content = document.getElementById('emailOutput').textContent;
    navigator.clipboard.writeText(content).then(() => alert('Email campaign copied to clipboard!'));
}

function downloadEmail() {
    const content = document.getElementById('emailOutput').textContent;
    downloadText(content, 'email-campaign.txt');
}

function copySocial() {
    const content = document.getElementById('socialOutput').textContent;
    navigator.clipboard.writeText(content).then(() => alert('Social content copied to clipboard!'));
}

function downloadSocial() {
    const content = document.getElementById('socialOutput').textContent;
    downloadText(content, 'social-media-content.txt');
}

function copyDoc() {
    const content = document.getElementById('docOutput').textContent;
    navigator.clipboard.writeText(content).then(() => alert('Document copied to clipboard!'));
}

function downloadDoc() {
    const content = document.getElementById('docOutput').textContent;
    downloadText(content, 'business-document.txt');
}

function copyVoice() {
    const content = document.getElementById('voiceOutput').textContent;
    navigator.clipboard.writeText(content).then(() => alert('Voice script copied to clipboard!'));
}

function downloadVoice() {
    const content = document.getElementById('voiceOutput').textContent;
    downloadText(content, 'voice-script.txt');
}

function copyTranscription() {
    const content = document.getElementById('transcriptionText').textContent;
    navigator.clipboard.writeText(content).then(() => alert('Transcription copied to clipboard!'));
}

function downloadTranscription() {
    const content = document.getElementById('transcriptionText').textContent;
    downloadText(content, 'audio-transcription.txt');
}

function downloadText(text, filename) {
    const element = document.createElement('a');
    const file = new Blob([text], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

function downloadImage() {
    const img = document.getElementById('imageOutput');
    const element = document.createElement('a');
    element.href = img.src;
    element.download = 'generated-image.jpg';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

function subscribe(plan) {
    alert(`Subscription upgrade to ${plan} plan coming soon! Contact support for early access.`);
}
