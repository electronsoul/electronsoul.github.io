import { Link } from "react-router-dom";
import blogs from "../constants/blogs";

const BlogList = () => {
  return (
    <div className="max-4xl mx-auto py-10 c-space">

      <br/>
      <h1 className="text-4xl font-bold mb-6">
        Embedded Hardware Design Insights
      </h1>
      <p className="mb-4">
        Here I share concise explorations of embedded systems I’ve designed or analyzed — from PCB layouts to control architectures and EMI strategies. This section will keep growing as I tackle more hardware challenges.
      </p>
      <p className="mb-4">
        Studying embedded designs reveals crucial decisions around microcontroller selection, power topologies, signal integrity, and ruggedization for industrial environments.
      </p>

      <ul className="list-disc list-inside mb-8 space-y-2">
        <li><strong>Better design choices:</strong> Learn proven methods in power, RF, and sensor integration.</li>
        <li><strong>Cost-effective systems:</strong> Analyze BOM and layouts to balance cost and reliability.</li>
        <li><strong>Reliable performance:</strong> Spot how thermal and EMI strategies enhance durability.</li>
        <li><strong>Up-to-date approaches:</strong> See how new MCUs and protocols are used in real products.</li>
        <li><strong>Team learning:</strong> Great for onboarding engineers to PCB and firmware best practices.</li>
      </ul>
      <br/>

      <img
        src="/assets/bloglist.png"
        alt="Embedded hardware blog illustration"
        className="w-full h-128 rounded object-cover shadow-lg transition-transform 
        duration-500 hover:scale-105 hover:shadow-2xl" 
      />
      <br/><br/>

      <div className="grid md:grid-cols-2 gap-8">
        {blogs.map((post) => (
          <div key={post.slug} className="bg-neutral-800 rounded-lg p-6 shadow hover:shadow-xl transition">
            <img src={post.image} alt={post.title} className="rounded mb-4" />
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-neutral-400 mb-2">{post.date}</p>
            <p className="text-neutral-300 mb-4">{post.summary}</p>
            <Link to={`/blog/${post.slug}`} className="text-blue-400 hover:underline">
              Read More →
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
};

export default BlogList;
