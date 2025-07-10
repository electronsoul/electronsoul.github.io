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
    href: "https://wa.me/918630426831",
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
      "Designed modular, stackable PCB architectures for IoT devices, enabling flexible hardware expansion and streamlined integration of sensor, communication, and power modules.",
      "Developed end-to-end electronics concepts from functional block diagrams to detailed schematics and multi-layer PCB layouts, ensuring robust signal integrity and EMI performance. ",
      "Deployed distributed node + broker IoT systems with LoRa & LTE.",
      "Created 3D CAD models for custom enclosures, aligning mechanical constraints with thermal, antenna placement, and serviceability considerations."
    ],
  },
  {
    title: "Internship: Embedded Engineer",
    job: "Otomator Technologies",
    date: "Feb 2022 - Dec 2022",
    contents: [
      "Developed PCB designs for IoT stack modules, ensuring alignment with system architecture and scalability requirements.",
      "Analyzed new hardware feature requests and prepared detailed technical documentation to capture specifications and implementation plans.",
      "Implemented circuit and layout updates for evolving IoT designs, and participated in design reviews to troubleshoot and resolve hardware issues."
    ],
  },
  {
    title: "Internship: PCB Designer",
    job: "Bipolar Factory",
    date: "Jul 2021 - Oct 2021",
    contents: [
      "Designed the PCB for a network aggregator leveraging a CM4 carrier architecture, integrating high-speed Ethernet and USB interfaces for seamless data throughput.",
      "Optimized multi-layer routing, impedance control, and power distribution on the CM4 carrier board to ensure robust performance and scalability.",
      "Collaborated with firmware teams to validate hardware bring-up, supporting rapid prototyping and deployment of the aggregator system."
    ],
  },
  {
    title: "Internship: Product Designer",
    job: "Electrofield",
    date: "Feb 2019 - Feb 2020",
    contents: [
      " Designed a basic motor driver circuit for a PMDC motor, gaining hands-on experience with power stage fundamentals and protection elements.",
      " Contributed to the initial concept and simple hardware layout for a shoe sanitizer device, supporting prototype development and basic validation."
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
