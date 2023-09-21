import Link from "next/link";

const Category = () => {
  const categories = [
    { name: "Ride Destinations", count: 5 },
    { name: "Gear Reviews", count: 4 },
    { name: "Maintenance Tips", count: 6 },
    { name: "Rider Experiences", count: 7 },
    { name: "Motorcycle News", count: 3 },
  ];

  return (
    <ul className="style-none">
      {categories.map((category, index) => (
        <li key={index}>
          <Link href="/blog-details/1">
            {category.name}
            <span className="float-end">({category.count})</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Category;
