import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Clock } from "lucide-react"

export function StallsExhibits() {
  return (
    <section className="py-16 bg-black/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-balance">
            Stalls & <span className="text-lime-300">Exhibits</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto text-pretty">
            Apart from technical and non-technical events, Aetherion 2025 will host engaging stalls where you can enjoy
            games, food, merchandise, and creative showcases by students.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {stallsData.map((stall, index) => (
            <Card
              key={index}
              className="bg-black/60 border-white/20 hover:border-lime-300/30 transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className={`text-black border-2 ${stall.badgeColor}`}>
                    {stall.category}
                  </Badge>
                  <div className="text-2xl">{stall.emoji}</div>
                </div>
                <CardTitle className="text-white text-lg">{stall.name}</CardTitle>
                <CardDescription className="text-gray-300">{stall.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3 w-3 text-lime-300" />
                    <span>{stall.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-3 w-3 text-lime-300" />
                    <span>{stall.timing}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-3 w-3 text-lime-300" />
                    <span>{stall.organizer}</span>
                  </div>
                </div>
                {stall.highlights && (
                  <div className="mt-3 pt-3 border-t border-white/10">
                    <p className="text-xs text-lime-300 font-medium">{stall.highlights}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

const stallsData = [
  {
    name: "The Pastry Heaven",
    category: "Desserts & Snacks",
    emoji: "🧁",
    description:
      "Indulge in heavenly delights with our freshly baked pastries, irresistible desserts, and crunchy snacks made to sweeten your day.",
    location: "Food Court A",
    timing: "9:00 AM - 3:50 PM",
    organizer: "The Pastry Heaven",
    badgeColor: "bg-pink-400 border-pink-400",
    highlights: "Freshly baked daily!",
  },
  {
    name: "Nabas Boutique",
    category: "Dresses",
    emoji: "👗",
    description:
      "Discover elegance and style at Nabas Boutique, where every dress is designed to make you feel confident and graceful.",
    location: "Fashion Zone",
    timing: "9:00 AM - 3:50 PM",
    organizer: "Nabas Boutique",
    badgeColor: "bg-purple-400 border-purple-400",
    highlights: "Elegant designs for every occasion!",
  },
  {
    name: "Sirfa",
    category: "Accessories & Bags",
    emoji: "👜",
    description:
      "Complete your look with chic accessories and trendy bags from Sirfa—where fashion meets everyday charm.",
    location: "Accessories Corner",
    timing: "9:00 AM - 3:50 PM",
    organizer: "Sirfa",
    badgeColor: "bg-indigo-400 border-indigo-400",
    highlights: "Trendy accessories for every style!",
  },
  {
    name: "T and H",
    category: "Hijabs",
    emoji: "🧕",
    description: "Wrap yourself in style with T and H's collection of beautiful, comfortable, and modern hijabs.",
    location: "Fashion Zone",
    timing: "9:00 AM - 3:50 PM",
    organizer: "T and H",
    badgeColor: "bg-teal-400 border-teal-400",
    highlights: "Modern and comfortable designs!",
  },
  {
    name: "AR Edible",
    category: "Frozen Snacks & Masala",
    emoji: "🌶️",
    description:
      "Taste the goodness of home with AR Edible—frozen snacks and organic masalas made with love and purity.",
    location: "Food Court B",
    timing: "9:00 AM - 3:50 PM",
    organizer: "AR Edible",
    badgeColor: "bg-green-400 border-green-400",
    highlights: "Organic and homemade goodness!",
  },
  {
    name: "Pick Me Up Chocolate",
    category: "Desserts",
    emoji: "🍫",
    description: "Lift your mood with decadent chocolates and desserts crafted to make every bite unforgettable.",
    location: "Sweet Corner",
    timing: "9:00 AM - 3:50 PM",
    organizer: "Pick Me Up Chocolate",
    badgeColor: "bg-amber-400 border-amber-400",
    highlights: "Mood-lifting chocolate treats!",
  },
  {
    name: "Hana Shop",
    category: "Juices",
    emoji: "🥤",
    description: "Refresh your soul with Hana Shop's freshly made juices—pure, natural, and oh-so-refreshing.",
    location: "Beverage Station",
    timing: "9:00 AM - 3:50 PM",
    organizer: "Hana Shop",
    badgeColor: "bg-orange-400 border-orange-400",
    highlights: "Fresh and natural juices!",
  },
  {
    name: "Insta Foods",
    category: "Shawarma & Fried Rice",
    emoji: "🌯",
    description:
      "Savor the flavors of the world at Insta Foods with juicy shawarmas and sizzling fried rice made just right.",
    location: "Main Food Court",
    timing: "9:00 AM - 3:50 PM",
    organizer: "Insta Foods",
    badgeColor: "bg-red-400 border-red-400",
    highlights: "World flavors in every bite!",
  },
  {
    name: "Habibi Collection",
    category: "Abayas",
    emoji: "👘",
    description:
      "Step into elegance with Habibi Collection's abayas—where tradition and modern fashion beautifully blend.",
    location: "Traditional Wear Section",
    timing: "9:00 AM - 3:50 PM",
    organizer: "Habibi Collection",
    badgeColor: "bg-violet-400 border-violet-400",
    highlights: "Traditional meets modern fashion!",
  },
  {
    name: "String Theory Studio",
    category: "Handmade Bracelets",
    emoji: "📿",
    description: "Adorn your wrists with love — unique, handcrafted bracelets that tell a story with every thread.",
    location: "Craft Corner",
    timing: "9:00 AM - 3:50 PM",
    organizer: "String Theory Studio",
    badgeColor: "bg-rose-400 border-rose-400",
    highlights: "Each bracelet tells a unique story!",
  },
]
