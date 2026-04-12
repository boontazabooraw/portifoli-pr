import clientPromise from "@/lib/mongodb";

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db('resume');

        // Return collection of names for testing purposes
        const projects = await db.collection('projects').find({}).toArray();

        return new Response(JSON.stringify(projects), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (err) {
        console.error(err);
        return new Response(JSON.stringify({ error: "Failed to fetch /projects" }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        })
    }
}