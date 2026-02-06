export interface Product {
    id: string;
    name: string;
    subName: string;
    price: string;
    description: string;
    folderPath: string;
    themeColor: string;
    gradient: string;
    features: string[];
    stats: { label: string; val: string }[];
    section1: { title: string; subtitle: string };
    section2: { title: string; subtitle: string };
    section3: { title: string; subtitle: string };
    section4: { title: string; subtitle: string };
    detailsSection: { title: string; description: string; imageAlt: string };
    freshnessSection: { title: string; description: string };
    buyNowSection: {
        price: string;
        unit: string;
        processingParams: string[];
        deliveryPromise: string;
        returnPolicy: string;
    };
}

export const product: Product = {
    id: "avakai",
    name: "Andhra Avakai",
    subName: "Fire. Tradition. Flavor.",
    price: "₹220",
    description: "Raw mango • Stone-ground spices • Cold-pressed sesame oil",
    folderPath: "/images/avakai",
    themeColor: "#C62828",
    gradient: "linear-gradient(135deg, #C62828 0%, #F9A825 100%)",
    features: [
        "Sun-cured raw mango",
        "Stone-ground spices",
        "Cold-pressed gingelly oil"
    ],
    stats: [
        { label: "Preservatives", val: "0%" },
        { label: "Oil", val: "Sesame" },
        { label: "Authenticity", val: "100%" }
    ],
    section1: {
        title: "Andhra Avakai.",
        subtitle: "A legendary pickle."
    },
    section2: {
        title: "Raw mango. Red chilli. Mustard.",
        subtitle: "The holy trinity of Andhra kitchens."
    },
    section3: {
        title: "Slow-crafted heat.",
        subtitle: "Sun-dried mangoes soaked in spice and oil for weeks."
    },
    section4: {
        title: "Not just a pickle. A ritual.",
        subtitle: ""
    },
    detailsSection: {
        title: "Heritage in a Jar",
        description:
            "Our Avakai follows a generations-old Andhra recipe using hand-cut raw mangoes, stone-ground mustard and Guntur red chillies. The pickle matures naturally in sesame oil, developing deep, layered heat and aroma that defines true Avakai.",
        imageAlt: "Avakai Pickle Close Up"
    },
    freshnessSection: {
        title: "Naturally Preserved",
        description:
            "No vinegar. No chemicals. Salt, oil, and time do the work. Each batch is prepared seasonally and rested to allow the spices to bloom and bind, ensuring shelf stability through tradition—not shortcuts."
    },
    buyNowSection: {
        price: "₹220",
        unit: "per 250g glass jar",
        processingParams: ["Sun Cured", "Stone Ground", "Oil Preserved"],
        deliveryPromise:
            "Carefully packed and shipped across India. Leak-proof glass jars.",
        returnPolicy:
            "Authentic taste guaranteed. Replacement available for transit damage."
    }
};
