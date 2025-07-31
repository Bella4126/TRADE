// // import FeatureCard from './FeatureCard';
// // import { Layout, Signal as RadioSignal, TrendingUp } from 'lucide-react';

// // export default function FeaturesSection() {
// //   const features = [
// //     {
// //       icon: {
// //         component: <Layout size={24} className="text-purple-300" />,
// //         bgColor: "bg-purple-500 bg-opacity-20"
// //       },
// //       title: "User-friendly interface",
// //       description: "You have access to all the trading instruments you need, and their speed is impressive.",
// //       ctaText: "Sign up",
// //       ctaLink: "#"
// //     },
// //     {
// //       icon: {
// //         component: <RadioSignal size={24} className="text-red-300" />,
// //         bgColor: "bg-red-500 bg-opacity-20"
// //       },
// //       title: "Integrated signals",
// //       description: "Signals with 87% accuracy rate will help you to build a profitable strategy.",
// //       ctaText: "Try it",
// //       ctaLink: "#"
// //     },
// //     {
// //       icon: {
// //         component: <TrendingUp size={24} className="text-blue-300" />,
// //         bgColor: "bg-blue-500 bg-opacity-20"
// //       },
// //       title: "Trading indicators",
// //       description: "We have collected the most useful trading indicators for you. Test them on a demo account to see which ones best suit your trading style.",
// //       ctaText: "Explore",
// //       ctaLink: "#"
// //     }
// //   ];

// //   return (
// //     <section className="py-16 px-6">
// //       <div className="max-w-7xl mx-auto">
// //         <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
// //           Features of the platform
// //         </h2>
// //         <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
// //           We regularly improve our platform to make your trading comfortable and safe.
// //         </p>
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //           {features.map((feature, index) => (
// //             <FeatureCard key={index} {...feature} />
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }



// import FeatureCard from './FeatureCard';
// import { Layout, Signal as RadioSignal, TrendingUp } from 'lucide-react';

// export default function FeaturesSection() {
//   const features = [
//     {
//       icon: {
//         component: <Layout size={24} className="text-purple-600" />,
//         bgColor: "bg-purple-100"
//       },
//       title: "User-friendly interface",
//       description: "You have access to all the trading instruments you need, and their speed is impressive.",
//       ctaText: "Sign up",
//       ctaLink: "#"
//     },
//     {
//       icon: {
//         component: <RadioSignal size={24} className="text-red-600" />,
//         bgColor: "bg-red-100"
//       },
//       title: "Integrated signals",
//       description: "Signals with 87% accuracy rate will help you to build a profitable strategy.",
//       ctaText: "Try it",
//       ctaLink: "#"
//     },
//     {
//       icon: {
//         component: <TrendingUp size={24} className="text-blue-600" />,
//         bgColor: "bg-blue-100"
//       },
//       title: "Trading indicators",
//       description: "We have collected the most useful trading indicators for you. Test them on a demo account to see which ones best suit your trading style.",
//       ctaText: "Explore",
//       ctaLink: "#"
//     }
//   ];

//   return (
//      <section className="py-16 px-6">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900">
//           Features of the platform
//         </h2>
//         <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
//           We regularly improve our platform to make your trading comfortable and safe.
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-2">
//           {features.map((feature, index) => (
//             <FeatureCard key={index} {...feature} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import FeatureCard from './FeatureCard';
import { Layout, Signal as RadioSignal, TrendingUp, Headphones, Gift, Wallet } from 'lucide-react';

export default function FeaturesSection() {
 const mainFeatures = [
  {
    icon: {
      component: <Layout size={24} className="text-purple-600" />,
      bgColor: "bg-purple-100"
    },
    title: "User-friendly interface",
    description: "You have access to all the trading instruments you need, and their speed is impressive. Experience fast trades.", // padded to align
    ctaText: "Sign up",
    ctaLink: "#"
  },
  {
    icon: {
      component: <RadioSignal size={24} className="text-red-600" />,
      bgColor: "bg-red-100"
    },
    title: "Integrated signals",
    description: "Signals with 87% accuracy rate will help you to build a profitable strategy. This guarantees you a strong start.", // padded to align
    ctaText: "Try it",
    ctaLink: "#"
  },
  {
    icon: {
      component: <TrendingUp size={24} className="text-blue-600" />,
      bgColor: "bg-blue-100"
    },
    title: "Trading indicators",
    description: "We have collected the most useful trading indicators for you. Test them on a demo account to see which ones is best.", // padded to align
    ctaText: "Explore",
    ctaLink: "#"
  }
];

  const additionalFeatures = [
  {
    icon: {
      component: <Headphones size={24} className="text-yellow-600" />,
      bgColor: "bg-yellow-100"
    },
    title: "Support 24/7",
    description: "Our highly trained support staff is ready to assist you at any time. Feel free to reach out.", // padded to align
    ctaText: "Submit a request",
    ctaLink: "#"
  },
  {
    icon: {
      component: <Gift size={24} className="text-green-600" />,
      bgColor: "bg-green-100"
    },
    title: "Bonus programs",
    description: "Participate in tournaments and giveaways for traders to get bonuses. Claim your rewards today.", // padded to align
    ctaText: "Get a bonus",
    ctaLink: "#"
  },
  {
    icon: {
      component: <Wallet size={24} className="text-cyan-600" />,
      bgColor: "bg-cyan-100"
    },
    title: "Deposits and withdrawals",
    description: "Various deposit options and fast withdrawal of funds. The minimum deposit is only 10 USD.", // padded to align
    ctaText: "Start trading",
    ctaLink: "#"
  }
];

  const allFeatures = [...mainFeatures, ...additionalFeatures];

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
          Features of the platform
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto text-lg">
          We regularly improve our platform to make your trading comfortable and safe.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-2">
          {allFeatures.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
