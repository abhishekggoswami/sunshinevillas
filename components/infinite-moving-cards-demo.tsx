"use client"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"

export function InfiniteMovingCardsDemo() {
  return (
    <div
      className="h-[40rem] rounded-md flex flex-col antialiased relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/images/villa-day.jpg)" }}
    >
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      <div className="relative z-10 flex flex-col justify-center h-full space-y-8">
        <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
        <InfiniteMovingCards items={moreTestimonials} direction="left" speed="normal" />
      </div>
    </div>
  )
}

const testimonials = [
  {
    quote:
      "Villa 814 exceeded all our expectations! The swimming pool and coastal setting was absolutely breathtaking. Perfect for our family reunion. The caretaker service was exceptional and made our stay worry-free.",
    name: "Priya Krishnamurthy",
    title: "Chennai, Tamil Nadu",
    rating: 5,
  },
  {
    quote:
      "What an incredible experience! The villa's modern architecture blends beautifully with the coastal setting. We hosted our anniversary celebration here and it was magical. The kitchen facilities were top-notch.",
    name: "Rajesh Subramanian",
    title: "Chennai, Tamil Nadu",
    rating: 5,
  },
  {
    quote:
      "Absolutely stunning property! The master bedrooms are spacious and luxurious. The poolside pavilion was perfect for our evening gatherings. Highly recommend for special occasions.",
    name: "Meera Venkatesh",
    title: "Kanchipuram, Tamil Nadu",
    rating: 4,
  },
  {
    quote:
      "Villa 814 is a gem! The rooftop terrace offers amazing views and the smart home features made everything so convenient. Perfect for our corporate retreat. Will definitely book again!",
    name: "Arun Kumar",
    title: "Chennai, Tamil Nadu",
    rating: 5,
  },
  {
    quote:
      "Outstanding luxury villa! The spa-like bathrooms and premium furnishings made our stay feel like a 5-star resort. The location is perfect - close to beaches but private and peaceful.",
    name: "Lakshmi Narayanan",
    title: "Chennai, Tamil Nadu",
    rating: 4,
  },
  {
    quote:
      "Exceptional property for celebrations! We had our son's birthday party here and the space was perfect. The 8-car parking was very convenient for our guests. Truly a luxury experience.",
    name: "Venkatesh Raman",
    title: "Vellore, Tamil Nadu",
    rating: 5,
  },
  {
    quote:
      "Villa 814 is paradise! The swimming pool and coastal location are incredible. The villa is well-maintained and the amenities are world-class. Perfect for a luxury getaway with friends.",
    name: "Divya Selvam",
    title: "Chennai, Tamil Nadu",
    rating: 4,
  },
  {
    quote:
      "Absolutely loved our stay! The villa's design is stunning and every detail is thoughtfully planned. The dedicated caretaker made sure we had everything we needed. Highly recommended!",
    name: "Karthik Murugan",
    title: "Chennai, Tamil Nadu",
    rating: 5,
  },
]

const moreTestimonials = [
  {
    quote:
      "The grand staircase and luxury bathrooms are breathtaking! We felt like royalty during our stay. The 24/7 caretaker service made everything seamless. Perfect venue for our wedding photoshoot.",
    name: "Deepika Ramesh",
    title: "Chennai, Tamil Nadu",
    rating: 5,
  },
  {
    quote:
      "Incredible villa with world-class amenities! The smart home features and premium sound system made our bachelor party unforgettable. The poolside area is absolutely stunning at night.",
    name: "Vikram Chandran",
    title: "Chennai, Tamil Nadu",
    rating: 4,
  },
  {
    quote:
      "Villa 814 is a masterpiece! The views from the balconies are mesmerizing. We hosted our company annual meet here and everyone was impressed. The dining area is perfect for large groups.",
    name: "Sanjay Krishnan",
    title: "Chennai, Tamil Nadu",
    rating: 5,
  },
  {
    quote:
      "What a fantastic experience! The villa's architecture is modern yet elegant. The swimming pool and lawn area provided the perfect setting for our family celebration. Highly recommended!",
    name: "Kavitha Sundaram",
    title: "Cuddalore, Tamil Nadu",
    rating: 4,
  },
  {
    quote:
      "Luxury at its finest! The master bedrooms are spacious and the bathrooms feel like a spa. The villa's location offers privacy while being accessible. Perfect for our anniversary getaway.",
    name: "Arjun Natarajan",
    title: "Kanchipuram, Tamil Nadu",
    rating: 5,
  },
  {
    quote:
      "Villa 814 exceeded every expectation! The rooftop terrace offers panoramic views and the villa's design is Instagram-worthy. Our film shoot went perfectly thanks to the beautiful interiors.",
    name: "Nithya Balasubramanian",
    title: "Chennai, Tamil Nadu",
    rating: 5,
  },
  {
    quote:
      "Absolutely phenomenal property! The premium furnishings and smart amenities made our stay comfortable. The poolside pavilion is perfect for evening relaxation. Will definitely return!",
    name: "Suresh Murugesan",
    title: "Chennai, Tamil Nadu",
    rating: 4,
  },
  {
    quote:
      "Villa 814 is pure luxury! The coastal views and modern amenities create the perfect vacation atmosphere. The caretaker team was professional and attentive. Ideal for special occasions.",
    name: "Preethi Venkatachalam",
    title: "Chennai, Tamil Nadu",
    rating: 5,
  },
]
