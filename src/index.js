export default {
  async fetch(request, env) {
    const cors = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Content-Type": "application/json"
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: cors });
    }

    const machines = [
      { name: "CAT Motor Grader", max: 65000 },
      { name: "CAT Excavator", max: 40000 },
      { name: "CAT Backhoe Loader", max: 35000 },
      { name: "Komatsu Excavator", max: 35000 },
      { name: "CASE Backhoe Loader", max: 30000 }
    ];

    const countries = ["USA", "Canada", "Australia"];

    return new Response(JSON.stringify({
      status: "Backend online",
      defaultCountry: "USA",
      countries,
      machines,
      message: "Backend test successful. Live marketplace search is not connected yet."
    }), { headers: cors });
  }
};
