const blogs = [
{
  slug: "understanding-resistors-in-pcb-design",
  title: "Understanding Resistors in PCB Design",
  date: "Jul 8, 2025",
  summary: "A closer look at how resistors are selected, placed, and impact embedded hardware reliability.",
  image: "/assets/blog/resistor.jpg",
  content: [
    { 
      type: "paragraph",
      text: "Resistors are among the simplest yet most critical components in embedded hardware. Beyond voltage division, they play roles in biasing, pull-ups, termination, and protecting sensitive circuits."
    },
    {
      type: "image",
      src: "/blogs/resistor-inspection.jpg",
      caption: "High-precision resistors on a multi-layer control PCB"
    },
    { 
      type: "heading",
      text: "Why Resistor Selection Matters"
    },
    { 
      type: "paragraph",
      text: "Choosing the right tolerance, power rating, and temperature coefficient directly affects the stability of voltage references, ADC accuracy, and overall signal integrity. In high-frequency designs, even small resistor footprints can influence impedance."
    },
    { 
      type: "heading",
      text: "Placement & Routing Considerations"
    },
    { 
      type: "paragraph",
      text: "In mixed-signal layouts, placing resistors close to source pins helps minimize noise pickup. For current sensing, keeping traces short and symmetrical maintains measurement accuracy."
    },
    {
      type: "image",
      src: "/blogs/resistor-placement.jpg",
      caption: "Strategic resistor placement to minimize loop area"
    },
    { 
      type: "heading",
      text: "Conclusion"
    },
    { 
      type: "paragraph",
      text: "Paying attention to resistor specs and layout practices helps ensure your embedded systems perform reliably under varying loads and temperatures. Even simple components deserve careful design thought."
    }
  ]
},
  {
    slug: "smart-bulb-analysis",
    title: "Smart Bulb Power Analysis",
    date: "Dec 5, 2022",
    summary: "Testing how smart bulbs handle voltage drops and line noise.",
    image: "/assets/images/smartbulb.jpg",
    content: [
      { type: "paragraph", text: "Modern smart bulbs..." },
    ]
  },
  {
    slug: "usb-pd-charger-teardown-2",
    title: "USB‑PD Charger Teardown",
    date: "Nov 23, 2022",
    summary: "We open up a USB‑PD charger and see what secrets it holds.",
    image: "/assets/images/usbpd.jpg",
    content: [
      { type: "paragraph", text: "Hardware teardowns are fascinating..." },
      { type: "image", src: "/assets/images/usbpd-inside.jpg", caption: "Inside the charger" },
      { type: "heading", text: "Analysis" },
      { type: "paragraph", text: "We can see the EMI filter..." }
    ]
  },
  {
    slug: "smart-bulb-analysis-2",
    title: "Smart Bulb Power Analysis",
    date: "Dec 5, 2022",
    summary: "Testing how smart bulbs handle voltage drops and line noise.",
    image: "/assets/images/smartbulb.jpg",
    content: [
      { type: "paragraph", text: "Modern smart bulbs..." },
    ]
  },
    {
    slug: "usb-pd-charger-teardown-3",
    title: "USB‑PD Charger Teardown",
    date: "Nov 23, 2022",
    summary: "We open up a USB‑PD charger and see what secrets it holds.",
    image: "/assets/images/usbpd.jpg",
    content: [
      { type: "paragraph", text: "Hardware teardowns are fascinating..." },
      { type: "image", src: "/assets/images/usbpd-inside.jpg", caption: "Inside the charger" },
      { type: "heading", text: "Analysis" },
      { type: "paragraph", text: "We can see the EMI filter..." }
    ]
  },
  {
    slug: "smart-bulb-analysis-3",
    title: "Smart Bulb Power Analysis",
    date: "Dec 5, 2022",
    summary: "Testing how smart bulbs handle voltage drops and line noise.",
    image: "/assets/images/smartbulb.jpg",
    content: [
      { type: "paragraph", text: "Modern smart bulbs..." },
    ]
  },
];

export default blogs;
