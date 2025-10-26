export const myProjects = [
  {
    id: 1,
    title: "LED Matrix Panel Driver (RP2040)",
    description:
      "Developed a high-performance LED matrix panel driver using RP2040 microcontroller, enabling animated graphics and seamless multi-panel chaining.",
    subDescription: [
      "Implemented scanline multiplexing with dynamic PWM brightness correction on dual M0+ cores.",
      "Supported cascading multiple LED panels for extended displays with perfect frame sync.",
      "Designed compact PCB with constant current drivers and thermal considerations.",
      "Created a protocol to receive pixel data over SPI/I2C from upstream controllers."
    ],
    href: "",
    logo: "",
    image: "/assets/projects/led-matrix.jpg",
    tags: [
      { id: 1, name: "RP2040", path: "/assets/logos/raspberrypi.svg" },
      { id: 2, name: "Vscode", path: "/assets/logos/visualstudiocode.svg" },
      { id: 3, name: "PCB", path: "/assets/logos/altium.svg" }
    ],
  },
  {
    id: 2,
    title: "IO Board — STM32 Based Industrial Controller",
    description:
      "A modular STM32 development board designed with robust relay outputs, surge-protected inputs, and onboard Ethernet connectivity for industrial control & monitoring.",
    subDescription: [
      "Integrated multiple digital inputs with MOVs & opto-isolation for surge and ESD immunity.",
      "Equipped with relay outputs rated for industrial loads with status feedback.",
      "Included 10/100 Ethernet PHY for web dashboard / Modbus TCP experiments.",
      "Designed to serve as a scalable platform for various power and sensor modules."
    ],
    href: "",
    logo: "",
    image: "/assets/projects/io-board.jpg",
    tags: [
      { id: 1, name: "STM32", path: "/assets/logos/stm32.svg" },
      { id: 2, name: "TCPIP", path: "/assets/logos/tcpip.svg" },
      { id: 3, name: "Vscode", path: "/assets/logos/visualstudiocode.svg" },
    ],
  },
  {
    id: 3,
    title: "Veloce — CM4 Network Aggregator",
    description:
      "A carrier board and system built around Raspberry Pi Compute Module 4, aggregating multiple USB LTE/4G dongles and Ethernet for combined high-speed uplinks, running OpenWRT.",
    subDescription: [
      "Designed to host up to 4 USB dongles for concurrent LTE connectivity.",
      "Included onboard gigabit Ethernet and SD card interface for OpenWRT storage.",
      "Optimized power distribution and protection for simultaneous modem loads.",
      "Developed OpenWRT build with mwan3 for multi-link aggregation and failover."
    ],
    href: "",
    logo: "",
    image: "/assets/projects/veloce.jpg",
    tags: [
      { id: 1, name: "CM4", path: "/assets/logos/cm4.svg" },
      { id: 2, name: "LTE", path: "/assets/logos/lte.svg" },
      { id: 3, name: "Ethernet", path: "/assets/logos/ethernet.svg" },
      { id: 4, name: "OpenWRT", path: "/assets/logos/openwrt.svg" }
    ],
  },
  {
    id: 4,
    title: "PMDC Motor Speed Controller",
    description:
      "Developed an STM32-based driver for precise speed control of PMDC motors, featuring feedback stabilization and protection for industrial applications.",
    subDescription: [
      "Implemented PWM modulation with soft-start, torque curve compensation, and stall detection.",
      "Integrated frequency feedback from hall/optical encoders for closed-loop speed stabilization.",
      "Optimized for low ripple and minimal EMI with spread-spectrum switching.",
      "Provided analog debug headers for field calibration and oscilloscope monitoring."
    ],
    href: "",
    logo: "",
    image: "/assets/projects/pmdc-driver.png",
    tags: [
      { id: 1, name: "STM32", path: "/assets/logos/stm32.svg" },
      { id: 2, name: "PWM", path: "/assets/logos/pwm.svg" },
      { id: 3, name: "Motor Control", path: "/assets/logos/motor.svg" },
      { id: 4, name: "EMI", path: "/assets/logos/emi.svg" }
    ],
  },
  {
    id: 5,
    title: "Flyback SMPS (STM32 Controlled DCM)",
    description:
      "Designed a flyback converter operating in Discontinuous Conduction Mode (DCM), with custom STM32 firmware for primary-side control, suitable for isolated low power applications.",
    subDescription: [
      "Implemented variable frequency and peak current control on STM32 timer + ADC.",
      "Added soft start, short circuit protection, and dynamic load response tuning.",
      "PCB optimized for low EMI and creepage/clearance compliant with industrial standards.",
      "Prototyped with isolated feedback for stable output across wide load conditions."
    ],
    href: "",
    logo: "",
    image: "/assets/projects/flyback.png",
    tags: [
      { id: 1, name: "Flyback", path: "/assets/logos/flyback.svg" },
      { id: 2, name: "STM32", path: "/assets/logos/stm32.svg" },
      { id: 3, name: "DCM", path: "/assets/logos/dcm.svg" },
      { id: 4, name: "Power", path: "/assets/logos/power.svg" }
    ],
  },
  {
    id: 6,
    title: "6S BMS with Balancing",
    description:
      "Battery management system for 6-series lithium packs, featuring analog-first protection and STM32 monitoring with event logs, passive balancing, and field debug interfaces.",
    subDescription: [
      "Handled over-voltage, under-voltage, short-circuit, thermal protections.",
      "Implemented passive balancing to maintain cell voltage integrity.",
      "Integrated UART/I2C interfaces for debug + calibration, with event/fault logging.",
      "Designed as a stackable system for scalable energy storage applications."
    ],
    href: "",
    logo: "",
    image: "/assets/projects/6s.jpg",
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
    href: "https://www.linkedin.com/in/skhanna23/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/919105753491",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Email",
    href: "mailto:satyamkhanna66@gmail.com",
    icon: "/assets/socials/email.svg",
  }
];

export const experiences = [
  {
    title: "Full Time: Senior IoT Engineer",
    job: "Vylt Technologies",
    date: "Jun 2024 - Present",
    contents: [
      "Designed modular multi-layer PCBs for industrial IoT devices in automation and supply chain tracking, reducing redesign iterations by 25% and accelerating time-to-market.",
      "Engineered remote MHE monitoring devices with IoT sensors that improved operator productivity tracking and provided real-time cloud visibility, boosting efficiency by over 80%.",
      "Delivered complete product stacks from architecture to schematic, PCB layout, enclosure CAD, and field validation, shortening prototype-to-deployment cycles by 35%.",
      "Adopted Git-based version control and Agile Scrum methods to streamline design handoffs and cross-team collaboration."
    ],
  },
  {
    title: "Full Time: Hardware Design Engineer",
    job: "VVDN Technologies",
    date: "Nov 2023 - Jun 2024",
    contents: [
      "Contributed to schematic design, PCB layout review, and troubleshooting of electronic circuits and embedded hardware.",
      "Executed board bringup and diagnostics on 5+ prototypes, achieving functional validation within 2 weeks and enabling pilot production on schedule.",
      "Prepared documentation and assembled 4+ prototype boards, ensuring smooth transfer from prototyping to production."
    ],
  },
  {
    title: "Full Time: Embedded Engineer",
    job: "VRSIIS",
    date: "Dec 2022 - Oct 2023",
    contents: [
      "Redesigned a 2-layer PCB into a 4-layer EMI/ESD-compliant board, improving signal integrity and reducing noise by 30%, enhancing industrial monitoring reliability.",
      "Optimized component selection and placement to cut BOM cost by 15% while maintaining regulatory compliance.",
      "Performed board bringup and validation, achieving first-pass success across 3 hardware designs."
    ],
  },
  {
    title: "Internship: Embedded Engineer",
    job: "Otomator Technologies",
    date: "Feb 2022 - Dec 2022",
    contents: [
      "Created stackable IoT PCB modules with modular buses, deployed in 4 commercial projects, increasing scalability and reducing integration effort by 20%.",
      "Produced design documentation and architecture diagrams that shortened design review cycles by 25%."
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
