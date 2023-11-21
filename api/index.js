const axios = require('axios').default;
export default function handler(req, res, next) {
  async function getURI(url) {
    try {
      const response = await axios({url});
      if (response.status !== 200) {
        return res.status(response.status).json({ type: 'error', message: response.statusText });
      } else {
      res.json(JSON.stringify(response.data))
      }
    } catch (error) {
      console.log(error.message, "ERR")
      // return res.status(500).json({ type: 'error', message: error.message });
    }
  
  res.setHeader('Access-Control-Allow-Origin', req.get("origin"));
  if (req.method === "OPTIONS"){req.status(200).end()}else{
    getURI(JSON.parse(req.body)['my-url'])
}
}
}