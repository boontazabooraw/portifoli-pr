import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("resume");

    const profile = await db.collection("profile").find({}).toArray();
    const education = await db.collection("education").find({}).toArray();
    const experience = await db.collection("experience").find({}).toArray();
    const projects = await db.collection("projects").find({}).toArray();
    const certifications = await db.collection("certifications").find({}).toArray();

    return new Response(
      JSON.stringify({
        profile,
        education,
        experience,
        projects,
        certifications
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    )

  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({
      error: "Failed to fetch /resume"
    }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    )

  }
}
