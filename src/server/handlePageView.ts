
 export async function handlePageView() {

    const url = `https://graph.facebook.com/v17.0/${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}/events?access_token=${process.env.NEXT_PUBLIC_FB_ACCESS_TOKEN}`
    // const url = "https://graph.facebook.com/v17.0/826718561974990/events?access_token=EAACae2YuggUBAFvZC0KdBNZAvnBXxIuR4zHNWqc2MMvRl8oO35NYccjjwKeUi6Drzw4tLqR8qdZAQB7RKjNEUNaZANBwU60d4QL0sUocQJMye1h2cdXCoCYZCdK2ZAb1LJvbmc1JJrJqiUOKsZAD3BOUyK1OrZAhXjjVmc7HvDrjRfRy1JSVfpPtqfOTUB3ITukZD"

    const crypto = require('crypto');
    const dateString = new Date().toISOString();
    const id = crypto.createHash('sha256').update(dateString).digest('hex');
    
    let postDataInfo = {
    "data": [
      {
        "action_source": "website",
        "event_id": id,
        "event_name": "PageView",
        "event_time": new Date().toISOString(),
        "user_data": {
            "client_ip_address": "254.254.254.254",
            "client_user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:63.0) Gecko/20100101 Firefox/63.0",
            "em": [
              "7b17fb0bd173f625b58636fb796407c22b3d16fc78302d79f0fd30c2fc2fc068"
          ],
          "ph": [
              null
          ]
          }
      }
    ],
        // "test_event_code": "TEST10153"
  }


    // Send a POST request to the specified URL

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Set the appropriate headers
      },
      body: JSON.stringify(postDataInfo), // Convert the data object to JSON
    });
  
    // Parse the response as JSON
    const jsonResponse = await response.json();
  
    return jsonResponse; // Return the response data
  }