const features = [
  { name: 'Friendly Environment', description: 'Proper Councelling and Regular Updates on Patient' },
  { name: 'Sleeping Area', description: 'Peaceful rooms for Rest' },
  { name: 'Swimming Pool', description: 'A Clean Swimming Pool' },
  { name: 'Fun Games', description: 'Indoor and Outdoor Games for Fun' },
  { name: 'Prayer & Yoga', description: 'Regualar Prayer & Yoga Sessions for Mental Peace' },
  { name: 'Hygenic Food', description: 'Proper Nutritious and Hygenic Food' },
]

export default function Facilities() {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          {/* <h2 className="text-3xl font-bold tracking-tight text-blue-500 sm:text-4xl">Facilities We Provide</h2> */}
          {/* <h2 className="text-3xl font-bold tracking-tight text-orange-300 sm:text-4xl">Facilities We Provide</h2> */}
          <h2 className="text-3xl font-bold tracking-tight text-orange-300 sm:text-4xl">Life @ RRC</h2>
          <p className="mt-4 text-blue-500">
            Patients have to follow a pre-planned schedule for their betterment. <br />
             Here are some of the facilities we provide to our patients.
            </p>
          

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-bold text-orange-300">{feature.name}</dt>
                <dd className="mt-2 text-sm text-blue-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            // src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
            // src="https://www.brainsway.com/wp-content/uploads/2022/08/how-to-measure-depression.jpg" --> depression image
            // src="https://aspiradiagnostics.com/wp-content/uploads/2023/10/7-Must-Have-Health-Check-ups-for-Every-Man.jpg" --> health checkup image
            // src="https://thumbs.dreamstime.com/b/english-cottage-garden-green-grass-lawn-backyard-house-infomal-landscape-decorate-rosemary-herb-silver-leaves-144973344.jpg"
            src="/images/12.JPG"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
          <img
            // src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
            // src="https://media.designcafe.com/wp-content/uploads/2021/09/04160047/different-dining-room-style-designs-for-your-home.jpg"
            src="/images/09.JPG"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            // src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
            // src="https://upload.wikimedia.org/wikipedia/commons/5/55/SRMPS_-_Hostel_Room.jpg"
            src="/images/14.JPG"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            // src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
            // src="https://kdham.com/wp-content/uploads/2019/08/patanjali-hall.jpg"
            src="/images/15.JPG"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            // src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
            // src="https://cdn.shopify.com/s/files/1/1610/6897/files/page12-2-6_480x480.webp?v=1667529294"
            src="/images/13.JPG"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            // src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
            // src="https://content.jdmagicbox.com/comp/bhopal/t1/0755px755.x755.180901225512.k6t1/catalogue/aqua-pools-consultant-pvt-ltd-new-market-bhopal-swimming-pool-contractors-atss5pw3zu.jpg"
            src="/images/11.JPG"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
          />
          

          <a href="/gallery">
      <button className='bg-orange-300 hover:bg-blue-500 text-white font-bold px-2 py-2  rounded w-60 my-2'>
              Explore RRC More
      </button>
              </a> 
          
        </div>
        
      </div>
      
    </div>
  )
}
