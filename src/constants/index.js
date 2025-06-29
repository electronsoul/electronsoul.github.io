export const myProjects = [
  {
    id: 1,
    title: "48V to 12V Buck Converter",
    description:
      "Designed a high-efficiency industrial DC-DC converter with EMI compliance and STM32-based dynamic PWM control.",
    subDescription: [
      "Synchronous rectification achieving >95% efficiency.",
      "Multi-stage LC filters and snubbers for EMI mitigation.",
      "STM32 MCU for load-sensing adaptive control.",
      "Designed with IPC & EMI compliance, with debug footprints for tuning."
    ],
    href: "",
    logo: "",
    image: "/assets/projects/buck-converter.jpg",
    tags: [
      { id: 1, name: "STM32", path: "/assets/logos/stm32.svg" },
      { id: 2, name: "Altium", path: "/assets/logos/altium.svg" },
      { id: 3, name: "DC-DC", path: "/assets/logos/power.svg" },
      { id: 4, name: "EMI", path: "/assets/logos/emi.svg" }
    ],
  },
  {
    id: 2,
    title: "Node & Broker IoT System",
    description:
      "A distributed wireless IoT architecture with nodes sending encrypted data to a local broker for real-time decisions.",
    subDescription: [
      "Designed battery-powered nodes with hydrostatic + environment sensors.",
      "2.4GHz LoRa nodes pushed payloads to a custom broker with LTE uplink.",
      "Integrated AES-128 encryption, OTA configuration and SD logging.",
      "Broker managed local caching & scheduled LTE batch uploads to cloud."
    ],
    href: "",
    logo: "",
    image: "/assets/projects/iot-broker.jpg",
    tags: [
      { id: 1, name: "LoRa", path: "/assets/logos/lora.svg" },
      { id: 2, name: "LTE", path: "/assets/logos/lte.svg" },
      { id: 3, name: "STM32", path: "/assets/logos/stm32.svg" },
      { id: 4, name: "AES-128", path: "/assets/logos/security.svg" }
    ],
  },
  {
    id: 3,
    title: "LED Matrix Panel Driver",
    description:
      "Custom driver hardware & firmware to drive large LED matrices with animation and text graphics.",
    subDescription: [
      "Implemented scanline control & brightness correction on STM32.",
      "Supported chained panels with seamless frame synchronization.",
      "Designed PCB with constant current sink & thermal optimization.",
      "Created utility protocol to send frames from external controllers."
    ],
    href: "",
    logo: "",
    image: "/assets/projects/led-matrix.jpg",
    tags: [
      { id: 1, name: "STM32", path: "/assets/logos/stm32.svg" },
      { id: 2, name: "Graphics", path: "/assets/logos/graphics.svg" },
      { id: 3, name: "PCB", path: "/assets/logos/altium.svg" },
      { id: 4, name: "LED", path: "/assets/logos/led.svg" }
    ],
  },
  {
    id: 4,
    title: "Veloce PMDC Motor Driver",
    description:
      "Variable speed driver for PMDC motors with feedback loop and EMI-conscious design.",
    subDescription: [
      "Implemented PWM control with soft-start and load compensation.",
      "Optimized PCB for high-current tracks & thermal spreading.",
      "Integrated encoder input for closed-loop speed regulation.",
      "Added analog debug headers for scope diagnosis & calibration."
    ],
    href: "",
    logo: "",
    image: "/assets/projects/veloce-motor.jpg",
    tags: [
      { id: 1, name: "PMDC", path: "/assets/logos/motor.svg" },
      { id: 2, name: "Control", path: "/assets/logos/control.svg" },
      { id: 3, name: "EMI", path: "/assets/logos/emi.svg" },
      { id: 4, name: "PWM", path: "/assets/logos/pwm.svg" }
    ],
  },
  {
    id: 5,
    title: "12S BMS with Balancing",
    description:
      "Battery management system with STM32 monitoring, passive balancing, robust protections & lifecycle event logging.",
    subDescription: [
      "Handled over/under voltage, temp, short-circuit, SoC estimation.",
      "UART/I2C debug interface for calibration & field service.",
      "Architected analog protection-first with STM32 supervision.",
      "Designed for modular stackable cells with future scaling."
    ],
    href: "",
    logo: "",
    image: "/assets/projects/bms.jpg",
    tags: [
      { id: 1, name: "BMS", path: "/assets/logos/bms.svg" },
      { id: 2, name: "Power", path: "/assets/logos/power.svg" },
      { id: 3, name: "UART/I2C", path: "/assets/logos/uart.svg" },
      { id: 4, name: "STM32", path: "/assets/logos/stm32.svg" }
    ],
  }
];

export const mySocials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/satyam-khanna/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
];

export const experiences = [
  {
    title: "Embedded Hardware Developer",
    job: "Power Electronics & IoT Systems",
    date: "2020-2023",
    contents: [
      "Designed EMI-optimized DC-DC converters with dynamic PWM control.",
      "Architected modular BMS systems with logging & balancing.",
      "Deployed distributed node + broker IoT systems with LoRa & LTE.",
      "Led multi-layer PCB design for LED drivers & motor control boards."
    ],
  },
  {
    title: "Freelance Embedded Systems Engineer",
    job: "Consulting & Product Development",
    date: "2023-Present",
    contents: [
      "Building TwoElectrodes as a brand for scalable embedded + power modules.",
      "Delivered custom LED drivers, IoT gateways, and Veloce PMDC solutions.",
      "Advised on EMI compliance, design for certification & field serviceability."
    ],
  }
];

export const reviews = [
  {
    name: "Ajay",
    username: "@ajay",
    body: "Integrated Satyam’s buck converter in our test benches — stable & clean. Love the design margins.",
    img: "https://robohash.org/ajay",
  },
  {
    name: "Priya",
    username: "@priya",
    body: "The node + broker system cut our field maintenance visits by half. Great engineering detail.",
    img: "https://robohash.org/priya",
  },
  {
    name: "Raj",
    username: "@raj",
    body: "Our battery packs with Satyam’s BMS sailed through stress tests and audits. Impressed.",
    img: "https://robohash.org/raj",
  },
  {
    name: "Nitin",
    username: "@nitin",
    body: "Appreciated the oscilloscope debug points & calibration notes on the Veloce driver.",
    img: "https://robohash.org/nitin",
  }
];
