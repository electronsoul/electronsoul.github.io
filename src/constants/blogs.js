const blogs = [
  {
    slug: "understanding-resistors-in-pcb-design",
    title: "Understanding Resistors in PCB Design",
    date: "Jul 8, 2025",
    summary: "A closer look at how resistors are selected, placed, and impact embedded hardware reliability.",
    image: "/assets/blog/resistor.jpg",
    content: `
      Resistors are among the simplest yet most critical components in embedded hardware. 
      Beyond voltage division, they play roles in biasing, pull-ups, termination, and protecting sensitive circuits.

      Choosing the right tolerance, power rating, and temperature coefficient directly affects the stability 
      of voltage references, ADC accuracy, and overall signal integrity. In high-frequency designs, even small 
      resistor footprints can influence impedance.

      In mixed-signal layouts, placing resistors close to source pins helps minimize noise pickup. 
      For current sensing, keeping traces short and symmetrical 
      
      [image:/assets/blog/resistor.jpg:This is a Resistor close-up:200]       
      [image:/assets/blog/resistor.jpg:This is a Resistor close-up:200] 
      maintains measurement accuracy. 

      Paying attention to resistor specs and layout practices helps ensure your embedded systems perform reliably 
      under varying loads and temperatures. Even simple components deserve careful design thought.
    `
  },

];

export default blogs;
