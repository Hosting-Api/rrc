const products = [
  {
    id: 1,
    name: 'Drugs & Alcohol De-Addiction Treatment',
    href: '#',
    price: 'Drugs & Alcohol De-Addiction Treatment',
    imageSrc: '/poster/p1.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35',
    imageSrc: '/poster/p2.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: '$89',
    imageSrc: '/poster/p3.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    imageSrc: '/poster/p4.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    imageSrc: '/poster/p5.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 6,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    imageSrc: '/poster/p6.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 7,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    imageSrc: '/poster/p7.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
]

export default function Treatments() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <h2 className="text-3xl font-bold tracking-tight text-orange-300 sm:text-4xl">Treatments We Offer</h2>

        {/* <p className="mt-4 text-blue-500">
          The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated
          steel divider separates active cards from new ones, or can be used to archive important task lists.
        </p> */}

        <ul className="list-disc list-inside text-blue-500">
          <li >Drugs & Alcohol De-Addiction Treatment</li>
          <li>Psychological Counselling</li>
          <li>Neurological Rehabilitation</li>
          <li>Physical Rehabilitation</li>
          
        </ul>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} className="group cursor-pointer">
              <div className="aspect-w-2 aspect-h-3 w-full overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
