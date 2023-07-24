
 export async function handlePageView() {

    const url = `https://graph.facebook.com/v17.0/826718561974990/events?access_token=EAACae2YuggUBAP9VfObapGESNP5Hsd0aSd0G8pQZBPpSpJNI0a395AZAQqwWdeIQwn7nvQjxmFXUuqnZAdHWJK2erfM2zuhX61JUw8nhelFzKI8KWlii71cQeTdiZCe59z80WDcURhNZAVrRMetX6cnpfmiya4mGMyetZBC8tsx0pegYu5KhRu065DP7ok35QZD`

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
            "em": "f660ab912ec121d1b1e928a0bb4bc61b15f5ad44d5efdc4e1c92a25e99b8e44a"
          }
      }
    ],
    "test_event_code": "TEST10153"
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