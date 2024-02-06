import PageBanner from "../components/PageBanner";

const people = [
  {
    name: "Bishop Beda Robles",
    role: "Chairman",
    imageUrl:
      "https://i0.wp.com/pcec.org.ph/wp-content/uploads/2022/11/Tanchi.jpg?w=1024&ssl=1",
  },
  {
    name: "Ptr. Celso Camat",
    role: "Vice Chairman",
    imageUrl:
      "https://i0.wp.com/pcec.org.ph/wp-content/uploads/2023/09/Udang.jpg?w=378&ssl=1",
  },
  {
    name: "Ptr. Danny dela Torre",
    role: "Core",
    imageUrl:
      "https://i0.wp.com/pcec.org.ph/wp-content/uploads/2023/09/Ramos.jpg?w=378&ssl=1",
  },
  {
    name: "Ptra. Rosana Joven",
    role: "Core",
    imageUrl:
      "https://i0.wp.com/pcec.org.ph/wp-content/uploads/2023/09/Villoria.jpg?resize=300%2C300&ssl=1",
  },
  {
    name: "Ptr. Arturo Tanael",
    role: "Core",
    imageUrl:
      "https://i0.wp.com/pcec.org.ph/wp-content/uploads/2022/11/Tanchi.jpg?w=1024&ssl=1",
  },
  {
    name: "Ptr. Ariel Arcangel",
    role: "Core",
    imageUrl:
      "https://i0.wp.com/pcec.org.ph/wp-content/uploads/2023/09/Udang.jpg?w=378&ssl=1",
  },
  {
    name: "Ptr. Ben Joven",
    role: "Core",
    imageUrl:
      "https://i0.wp.com/pcec.org.ph/wp-content/uploads/2023/09/Ramos.jpg?w=378&ssl=1",
  },
  {
    name: "Ptr. Delfin Santos",
    role: "Core",
    imageUrl:
      "https://i0.wp.com/pcec.org.ph/wp-content/uploads/2023/09/Villoria.jpg?resize=300%2C300&ssl=1",
  },
  {
    name: "Ptr. Romeo Plasencia",
    role: "Core",
    imageUrl:
      "https://i0.wp.com/pcec.org.ph/wp-content/uploads/2023/09/Villoria.jpg?resize=300%2C300&ssl=1",
  }
];

export default function EcaqCore() {
  return (
    <div className="bg-white">
      <PageBanner imageBannerSrc="img1.jpeg" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-appGreen sm:text-4xl">
            ECAQ Core
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-900">
            The ECAQ Core, who are elected by the National Assembly, are in
            charge of the policy making functions, direction and discipline of
            the entire work of the Council
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
        >
          {people.map((person) => (
            <li key={person.name} className="text-center">
              <img
                className="aspect-[14/13] w-full rounded-2xl object-cover"
                src={person.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                {person.name}
              </h3>
              <p className="text-base leading-7 text-gray-700">{person.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
