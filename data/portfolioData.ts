import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: 'Adith Surepally',
    title: 'Analog Layout Engineer',
    email: 'adithsurepally@gmail.com',
    phone: '+91 7893747970',
    summary: 'Detail-oriented VLSI engineering graduate specializing in analog IC layout. Possesses hands-on experience from an intensive training program, covering the end-to-end physical design of standard cells and complex analog circuits like Bandgap References and PLLs. Strong grasp of advanced layout techniques to optimize for performance and reliability in deep-submicron nodes.',
    profilePicUrl: '/images/profile-pic.png',
    aboutMe: "I'm a curious and driven engineer, passionate about understanding the intricate workings of integrated circuits. My goal is to contribute to cutting-edge analog designs and continuously learn in the ever-evolving world of semiconductor technology.",
    hero: {
      backgroundImageUrl: '/images/hero-background.jpg',
      contentBoxColor: 'rgba(255, 255, 255, 0.92)', // Background for the hero content box
    },
  },
  socialLinks: [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/surepallyadith' },
    { name: 'GitHub', url: 'https://github.com/your-username' },
    { name: 'Mail', url: 'mailto:adithsurepally@gmail.com' },
    { name: 'WhatsApp', url: 'https://wa.me/917893747970' },
  ],
  resumeUrl: '/Adith_Surepally_Resume.pdf',
  curiosityProjectIds: ['pll', 'sram', 'bandgap-ref'],
  experience: [
    {
      role: 'Analog Layout Design Trainee',
      company: 'MosChip Technologies, Hyderabad',
      period: 'August 2025 – October 2025',
      description: [
        'Mastered the end-to-end full-custom layout flow (schematic-to-GDSII) using the Cadence Virtuoso suite for design and PVS/Assura for physical verification in 90nm CMOS technology.',
        'Executed the complete physical layout for a portfolio of critical analog and standard cell blocks, including Op-Amps, Bandgap References (BGR), DACs, a PLL, and D-Flipflops.',
        'Applied advanced layout techniques to optimize performance, including common-centroid & interdigitation matching, and mitigated issues like crosstalk, parasitics, and latch-up using strategic shielding, guard rings, and deep N-well isolation.',
      ],
    },
    {
      role: 'Intern',
      company: 'NSIC (National Small Industries Corporation), Hyderabad',
      period: 'May 2023 – June 2023',
      description: [
        'Designed and assembled a prototype for an RFID-based locker system, integrating microcontrollers with RF readers and actuators and also enhanced with SIM 800C GSM Module.',
      ],
    },
  ],
  projects: [
    // --- DIGITAL STANDARD CELLS ---
    {
      id: 'inverter',
      title: 'Inverter',
      subtitle: 'Standard Cell',
      category: 'Training',
      subCategory: 'Digital',
      date: '2025-08-15',
      description: 'Designed and laid out a high-density 9T inverter cell, focusing on manufacturability, robust framework definition, and correct abutment rules for seamless integration.',
      images: [
        { src: '/images/digital/layout/inverter_layout.png', label: 'Layout' },
        { src: '/images/digital/schematic/inverter_sch.png', label: 'Schematic' }
      ],
      keyLearnings: [
        'Analyzed and implemented an optimized 9-transistor (9T) cell structure.',
        'Mastered foundry process rules by correctly identifying, managing, and routing with fabricable vs. non-fabricable layers.',
        'Established a robust and compliant cell framework by defining the Pin/Routing (PR) boundary, setting the cell origin, and applying half-DRC rules for correct abutment.',
        'Developed a matrix-form layout, optimizing for high density, efficient routability, and N-well sharing.',
      ],
      technologies: ['Cadence Virtuoso', 'Layout Design', 'Standard Cell', '90nm CMOS', 'DRC/LVS'],
    },
    {
      id: 'nor-gate',
      title: 'NOR Gate',
      subtitle: 'Standard Cell',
      category: 'Training',
      subCategory: 'Digital',
      date: '2025-08-18',
      description: 'Translated a NOR gate schematic into an efficient, area-constrained layout using systematic stick diagram rules and strategic pin placement to enhance routability.',
      images: [
        { src: '/images/digital/layout/nor_layout.png', label: 'Layout' },
        { src: '/images/digital/schematic/nor_sch.png', label: 'Schematic' }
      ],
      keyLearnings: [
        'Applied systematic stick diagram rules to translate a schematic into an efficient and DRC-clean layout topology.',
        'Mastered strategic pin placement and orientation to enhance top-level routability and seamless cell integration.',
        'Successfully engineered the layout to meet strict area constraints without compromising cell performance.',
        'Implemented N-well sharing techniques within a matrix structure to significantly improve layout density.',
      ],
      technologies: ['Stick Diagrams', 'Pin Placement', 'Area Optimization', 'Cadence Virtuoso'],
    },
    {
      id: 'nand-gate',
      title: 'NAND Gate',
      subtitle: 'Standard Cell',
      category: 'Training',
      subCategory: 'Digital',
      date: '2025-08-21',
      description: 'Engineered a NAND gate layout with a focus on material optimization, circuit reliability, and electromigration risk mitigation through robust latchup prevention and current flow control.',
      images: [
        { src: '/images/digital/layout/nand_layout.png', label: 'Layout' },
        { src: '/images/digital/schematic/nand_sch.png', label: 'Schematic' }
      ],
      keyLearnings: [
        'Analyzed and optimized material usage (e.g., polysilicon, metal layers) to balance routing efficiency, performance, and manufacturability.',
        'Demonstrated a strong understanding of circuit reliability by implementing robust latchup prevention structures (guard rings, substrate taps).',
        'Engineered the layout to manage and control current flow direction, mitigating electromigration (EM) risks.',
      ],
      technologies: ['Latch-up Prevention', 'Guard Rings', 'Electromigration (EM)', 'Cadence Virtuoso'],
    },
    {
      id: 'and-gate',
      title: 'AND Gate',
      subtitle: 'Standard Cell',
      category: 'Training',
      subCategory: 'Digital',
      date: '2025-08-24',
      description: 'Developed an AND gate layout by mastering optimal contact placement to minimize parasitics and creating enhanced routing strategies to solve complex connectivity challenges.',
      images: [
        { src: '/images/digital/layout/and_layout.png', label: 'Layout' },
        { src: '/images/digital/schematic/and_sch.png', label: 'Schematic' }
      ],
      keyLearnings: [
        'Mastered optimal contact placement strategies to minimize parasitic resistance and improve manufacturing yield.',
        'Initiated and developed enhanced routing strategies to solve complex connectivity challenges in combinatorial logic.',
      ],
      technologies: ['Contact Placement', 'Parasitic Resistance', 'Routing Strategy', 'Cadence Virtuoso'],
    },
    {
      id: 'or-gate',
      title: 'OR Gate',
      subtitle: 'Standard Cell',
      category: 'Training',
      subCategory: 'Digital',
      date: '2025-08-27',
      description: 'Implemented an OR gate layout demonstrating expertise in strategic layer selection to optimize routing density and reduce parasitic capacitance, using interdigitation to improve transistor performance.',
      images: [
        { src: '/images/digital/layout/or_layout.png', label: 'Layout' },
        { src: '/images/digital/schematic/or_sch.png', label: 'Schematic' }
      ],
      keyLearnings: [
        'Demonstrated expertise in strategic layer placement and selection to optimize routing density and reduce parasitic capacitance.',
        'Successfully implemented "fingering" (interdigitation) techniques to improve transistor matching and drive strength.',
      ],
      technologies: ['Interdigitation', 'Parasitic Capacitance', 'Layer Selection', 'Cadence Virtuoso'],
    },
    {
      id: 'xnor-gate',
      title: 'XNOR Gate',
      subtitle: 'Standard Cell',
      category: 'Training',
      subCategory: 'Digital',
      date: '2025-08-30',
      description: 'Successfully managed and resolved high routing complexity to deliver a compact and fully verified DRC/LVS-clean layout for a complex combinatorial XNOR cell.',
      images: [
        { src: '/images/digital/layout/xnor_layout.png', label: 'Layout' },
        { src: '/images/digital/schematic/xnor_sch.png', label: 'Schematic' }
      ],
      keyLearnings: [
        'Successfully managed and resolved high routing complexity, delivering a compact and DRC/LVS-clean layout for a complex combinatorial cell.',
      ],
      technologies: ['Complex Routing', 'Combinatorial Logic', 'DRC/LVS Clean', 'Cadence Virtuoso'],
    },
    {
      id: 'dff',
      title: 'D-Flip-Flop (DFF)',
      subtitle: 'Standard Cell',
      category: 'Training',
      subCategory: 'Digital',
      date: '2025-09-05',
      description: 'Applied advanced "carving" techniques to create intricate, dense, and DRC-compliant shapes for a DFF, systematically solving the significant routing complexity inherent in sequential cells.',
      images: [
        { src: '/images/digital/layout/dff_layout.png', label: 'Layout' },
        { src: '/images/digital/schematic/dff_sch.png', label: 'Schematic' }
      ],
      keyLearnings: [
        'Learned and applied advanced "carving" techniques to create intricate, highly dense, and DRC-compliant layout shapes for sequential logic.',
        'Systematically tackled and solved the significant routing complexity inherent in stateful, sequential cells.',
      ],
      technologies: ['Sequential Logic', 'Layout Carving', 'Stateful Cells', 'Cadence Virtuoso'],
    },
    // --- ANALOG CELLS ---
    {
      id: 'level-shifter',
      title: 'Level Shifter',
      subtitle: 'Analog Block',
      category: 'Training',
      subCategory: 'Analog',
      date: '2025-09-10',
      description: 'Implemented a level shifter with advanced Deep N-Well isolation to prevent substrate noise coupling between voltage domains, applying DFM principles for a high-yield, robust analog cell.',
      images: [
        { src: '/images/analog/schematic/level_shifter_sch.png', label: 'Schematic' },
        { src: '/images/analog/floorplan/level_shifter_floorplan_1.png', label: 'Floorplan 1' },
        { src: '/images/analog/floorplan/level_shifter_floorplan_2.png', label: 'Floorplan 2' },
        { src: '/images/analog/layout/levelshifter_layout_1.png', label: 'Layout 1' },
        { src: '/images/analog/layout/levelshifter_layout_2.png', label: 'Layout 2' }
      ],
      keyLearnings: [
        'Successfully implemented advanced isolation techniques, including Deep N-Well (DNW), to prevent substrate noise coupling between different voltage domains.',
        'Applied critical Design for Manufacturability (DFM) principles to ensure a high-yield, robust, and reliable analog cell.',
        'Demonstrated high proficiency in schematic-driven layout (SDL) methodologies using the Cadence Virtuoso Layout XL environment for guaranteed LVS correctness.',
        'Note: Antenna and density errors were turned off as per the training assignments, and some tweaking was introduced for DNW.',
      ],
      technologies: ['Deep N-Well', 'DFM', 'Schematic-Driven Layout (SDL)', 'Cadence Virtuoso XL'],
    },
    {
      id: 'common-amplifier',
      title: 'Common Source Amplifier',
      subtitle: 'Analog Block',
      category: 'Training',
      subCategory: 'Analog',
      date: '2025-09-20',
      description: 'Executed a high-precision layout for a common source amplifier by implementing a full suite of advanced analog techniques, including noise mitigation, precision matching, and DFM.',
      images: [
        { src: '/images/analog/floorplan/common_amplifier_floorplan.png', label: 'Floorplan' },
        { src: '/images/analog/schematic/common_amplifier_sch.png', label: 'Schematic' },
        { src: '/images/analog/layout/common_amplifier_layout.png', label: 'Layout' }
      ],
      keyLearnings: [
        'Executed a high-precision layout by implementing a full suite of advanced analog techniques, including:',
        'Noise Mitigation: Utilized metal shielding for sensitive nets and implemented guard rings for isolation.',
        'Precision Matching: Deployed cross-coupled common-centroid structures, gradient matching, and chirality (identical orientation) to cancel process variations.',
        'Manufacturability: Strategically placed dummy devices to ensure a uniform etching environment for critical transistors.',
        'Demonstrated strategic planning by prioritizing a detailed floorplan to manage signal flow, matching, and isolation pathways.',
        'Ensured minimal and symmetrical routing for all critical nets (e.g., differential pair) to maintain high performance (CMRR, offset).',
        'Successfully delivered the complex analog layout within all specified area constraints.',
        'Note: Antenna and density errors were turned off as per the training assignments, and some tweaking was introduced for DNW.',
      ],
      technologies: ['Common-Centroid', 'Shielding', 'Guard Rings', 'Dummy Devices', 'Floorplanning'],
    },
    {
      id: 'bandgap-ref',
      title: 'Bandgap Reference',
      subtitle: 'Analog Block',
      category: 'Training',
      subCategory: 'Analog',
      date: '2025-09-28',
      description: 'Executed a meticulous, high-precision layout for a BGR, focusing on transistor array matching and complex routing for specialized components to achieve target voltage accuracy.',
      images: [
        { src: '/images/analog/floorplan/bandgap_ref_floorplan.png', label: 'Floorplan' },
        { src: '/images/analog/schematic/bandgap_ref_sch.png', label: 'Schematic' },
        { src: '/images/analog/layout/bandgap_ref_layout.png', label: 'Layout' }
      ],
      keyLearnings: [
        'Successfully executed meticulous, high-precision matching for a large array of transistors, critical for achieving target voltage accuracy.',
        'Managed and implemented complex, low-parasitic routing for specialized components, including precision resistors and BJT devices.',
        'Ensured foundry compliance and manufacturability by inserting metal fill cells in low-density areas, guaranteeing CMP (Chemical-Mechanical Planarization) planarity.',
        'Note: Antenna and density errors were turned off as per the training assignments, and some tweaking was introduced for DNW.',
      ],
      technologies: ['Precision Matching', 'BJT Layout', 'Metal Fill', 'CMP', 'Cadence Virtuoso'],
    },
    {
      id: 'dac',
      title: 'Digital-to-Analog Converter (DAC)',
      subtitle: 'Analog Block',
      category: 'Training',
      subCategory: 'Analog',
      date: '2025-10-10',
      description: 'Engineered a DAC layout using a hierarchical, sub-block-based approach for modularity, managing a complex power domain strategy with robust Deep N-Well isolation.',
      images: [
        { src: '/images/analog/floorplan/dac_floorplan.png', label: 'Floorplan' },
        { src: '/images/analog/schematic/dac_sch.png', label: 'Schematic' },
        { src: '/images/analog/layout/dac_layout.png', label: 'Layout' }
      ],
      keyLearnings: [
        'Engineered the layout using a hierarchical, sub-block-based approach for modularity, reusability, and scalability.',
        'Managed a complex power domain strategy involving four distinct voltage sources, using Deep N-Well for robust isolation between analog and digital sections.',
        'Ensured high-precision analog performance by implementing component cloning, strategic dummy placement, and minimal, shielded routing for all critical analog nets.',
        'Note: Antenna and density errors were turned off as per the training assignments, and some tweaking was introduced for DNW.',
      ],
      technologies: ['Hierarchical Layout', 'Power Domains', 'Component Cloning', 'Deep N-Well'],
    },
    {
      id: 'pll',
      title: 'Phase Locked Loop (PLL)',
      subtitle: 'Analog Block',
      category: 'Training',
      subCategory: 'Analog',
      date: '2025-10-15',
      description: 'Designed and implemented the physical layout of a Phase Locked Loop (PLL) ensuring minimal jitter and phase noise through meticulous placement and routing strategies.',
      images: [
        { src: '/images/analog/layout/pll_layout.png', label: 'Top Level Layout' },
        { src: '/images/analog/floorplan/pll_floorplan.png', label: 'Floorplan' },
        { src: '/images/analog/schematic/pll_sch.png', label: 'Top Level Schematic' },
        { src: '/images/analog/schematic/pll_chargepump.png', label: 'Charge Pump Schematic' },
        { src: '/images/analog/schematic/pll_loopfilter.png', label: 'Loop Filter Schematic' },
        { src: '/images/analog/schematic/pll_phfd.png', label: 'PHFD Schematic' },
        { src: '/images/analog/schematic/pll_VCOTOP.png', label: 'VCO Top Schematic' },
        { src: '/images/analog/schematic/pll_VCOTOP_CLM2CMOS.png', label: 'CML to CMOS Schematic' },
        { src: '/images/analog/schematic/pll_VCOTOP_VCO.png', label: 'VCO Core Schematic' },
        { src: '/images/analog/schematic/pll_VCOTOP_VCO_VCOBIAS.png', label: 'VCO Bias Schematic' }
      ],
      keyLearnings: [
        'Learned placement of solenoid inductor to minimize magnetic coupling and interference.',
        'Achieved nearly symmetrical placement of devices in the Phase Frequency Detector (PHFD) block to ensure balanced path delays.',
        'Executed symmetrical routing between input and output terminals of the divider to maintain signal integrity.',
        'Implemented strategic isolation and shielding for the VCO to prevent noise injection.',
        'Note: Antenna and density errors were turned off as per the training assignments, and some tweaking was introduced for DNW.'
      ],
      technologies: ['Solenoid Placement', 'Symmetrical Routing', 'PHFD Layout', 'Cadence Virtuoso'],
    },
    {
      id: 'sram',
      title: 'SRAM Memory',
      subtitle: 'Analog Block',
      category: 'Training',
      subCategory: 'Analog',
      date: '2025-10-20',
      description: 'Layout design of a Static Random-Access Memory (SRAM) block focusing on density, access speed, and matching characteristics for reliable read/write operations.',
      images: [
        { src: '/images/analog/layout/SRAM_layout.png', label: 'Top Level Layout' },
        { src: '/images/analog/schematic/SRAM_sch.png', label: 'Top Level Schematic' },
        { src: '/images/analog/layout/SRAM_decoder_layout.png', label: 'Decoder Layout' },
        { src: '/images/analog/schematic/SRAM_decoder.png', label: 'Decoder Schematic' },
        { src: '/images/analog/schematic/SRAM_decoder_AND.png', label: 'Decoder AND Schematic' },
        { src: '/images/analog/layout/SRAM_MC_layout.png', label: 'Bitcell (MC) Layout' },
        { src: '/images/analog/schematic/SRAM_MC.png', label: 'Bitcell (MC) Schematic' },
        { src: '/images/analog/schematic/SRAM_senseamp.png', label: 'Sense Amplifier Schematic' }
      ],
      keyLearnings: [
        'Implemented symmetrical placement of the decoder circuitry to ensure uniform access delays.',
        'Designed equal and symmetrical routing for bit lines to minimize skew and capacitive mismatches.',
        'Optimized the bit-cell array layout for maximum density while strictly adhering to DRC rules.',
        'Note: Antenna and density errors were turned off as per the training assignments, and some tweaking was introduced for DNW.'
      ],
      technologies: ['Memory Layout', 'Bit-line Routing', 'Decoder Symmetry', 'Cadence Virtuoso'],
    },
    // --- OTHER PROJECTS ---
    {
      id: 'crypto-multiplier',
      title: 'VLSI Implementation of a Cryptographic RNB Multiplier',
      subtitle: 'B.Tech Major Project',
      category: 'Engineering Project',
      date: '2024-05-20',
      description: 'Designed the complete schematic-level architecture for multiple configurations (SISO, SIPO, PISO, PIPO) of a Residue Number System (RNS) based multiplier using the Cadence Virtuoso editor. Validated the circuit\'s logical correctness through simulation.',
      images: [
          { src: '/images/crypto-multiplier-layout.png', label: 'Layout' },
          { src: '/images/crypto-multiplier-schematic.png', label: 'Schematic' },
      ],
      keyLearnings: [
        'Developed a strong grasp of digital design principles in a VLSI context.',
        'Gained experience in schematic-level architecture design for complex digital systems.',
        'Mastered circuit validation through rigorous simulation and logical correctness checks.',
      ],
      technologies: ['Cadence Virtuoso', 'Digital Design', 'VLSI', 'RNS Multiplier', 'Simulation'],
    },
    {
      id: 'rfid-locker',
      title: 'RFID-Based Locker System',
      subtitle: 'Internship Project at NSIC',
      category: 'Internship',
      date: '2023-06-10',
      description: 'Designed and assembled a prototype for an RFID-based locker system, integrating microcontrollers with RF readers and actuators, enhanced with a SIM 800C GSM Module for remote notifications.',
      images: [
        { src: '/images/rfid-locker-prototype.png', label: 'Prototype' },
        { src: '/images/rfid-locker-schematic.png', label: 'Schematic' },
      ],
      keyLearnings: [
        'Practical experience in system integration with microcontrollers, sensors, and actuators.',
        'Firmware development for embedded systems.',
        'Prototyping and hardware assembly skills.',
      ],
      technologies: ['Microcontrollers', 'RFID', 'GSM Module', 'Embedded C', 'Prototyping'],
    },
  ],
  education: [
    { degree: 'B.Tech, Electronics & Communication', institution: 'Sreyas Institute of Engineering & Technology', period: '2024', score: '6.85 CGPA' },
    { degree: 'Intermediate (Class XII)', institution: 'Narayana Junior College, Hyderabad', period: '2021', score: '84%' },
    { degree: 'Secondary School (Class X)', institution: 'Dilsukhnagar Public School, Hyderabad', period: '2019', score: '87%' },
  ],
  skills: [
    { title: 'EDA Tools', skills: ['Cadence Virtuoso', 'Cadence PVS', 'Cadence Assura'] },
    { title: 'Verification', skills: ['DRC', 'LVS', 'Antenna Checks', 'ERC', 'Latch-up Analysis'] },
    { title: 'Layout Techniques', skills: ['Common-Centroid Matching', 'Interdigitation', 'Shielding', 'Guard Rings', 'Deep N-well', 'Parasitic Mitigation'] },
    { title: 'Languages & OS', skills: ['SKILL (Basic)', 'Perl (Basic)', 'Linux/Unix Environment'] },
  ],
};