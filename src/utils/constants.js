// OpenWeatherMap API configuration
export const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY || ''; 
export const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Expanded list of cities for better offline suggestions
export const POPULAR_CITIES = [
  "Amsterdam", "Athens", "Atlanta", "Austin", "Auckland",
  "Berlin", "Bangkok", "Barcelona", "Beijing", "Boston", "Baghdad", "Basra",
  "Chennai", "Chicago", "Cape Town", "Cairo", "Colombo",
  "Dubai", "Delhi", "Dhaka", "Dublin", "Doha",
  "Edinburgh", "Eindhoven", "Essen", "Eugene", "Exeter", "Erbil",
  "Frankfurt", "Fukuoka", "Florence", "Fremont", "Fargo",
  "Geneva", "Guangzhou", "Glasgow", "Gothenburg", "Graz",
  "Helsinki", "Hong Kong", "Houston", "Hanoi", "Hamburg",
  "Istanbul", "Islamabad", "Indianapolis", "Incheon", "Irvine", "Iraq",
  "Jakarta", "Johannesburg", "Jeddah", "Jerusalem", "Jaipur",
  "Kolkata", "Kyoto", "Kuala Lumpur", "Karachi", "Kiev",
  "London", "Los Angeles", "Lisbon", "Lima", "Lyon",
  "Mumbai", "Madrid", "Melbourne", "Manila", "Moscow",
  "New York", "Nairobi", "Naples", "Nagoya", "Nice",
  "Osaka", "Oslo", "Ottawa", "Orlando", "Omaha",
  "Paris", "Prague", "Perth", "Portland", "Philadelphia",
  "Quebec City", "Quito", "Quanzhou", "Quezon City", "Queretaro",
  "Rome", "Rio de Janeiro", "Riyadh", "Reykjavik", "Rotterdam",
  "Singapore", "Sydney", "Seoul", "Shanghai", "San Francisco",
  "Tokyo", "Toronto", "Taipei", "Tehran", "Tel Aviv",
  "Utrecht", "Ulan Bator", "Ulsan", "Uppsala", "Urumqi",
  "Vienna", "Vancouver", "Venice", "Valencia", "Verona",
  "Warsaw", "Washington DC", "Wellington", "Winnipeg", "Wuhan",
  "Xiamen", "Xi'an", "Xingtai", "Xining", "Xuzhou",
  "Yokohama", "Yangon", "Yerevan", "Yantai", "Yichang",
  "Zurich", "Zhengzhou", "Zagreb", "Zaragoza", "Zamboanga"
];
