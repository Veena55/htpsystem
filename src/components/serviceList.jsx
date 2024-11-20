import { MdOutlineHearing, MdOutlineLocalLaundryService } from 'react-icons/md'
import { FaArrowUpFromWaterPump, FaBolt, FaNetworkWired, FaSatelliteDish } from 'react-icons/fa6'
import { TbFreezeRowColumn } from 'react-icons/tb'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChair, faFilter } from '@fortawesome/free-solid-svg-icons';
import { faMaskVentilator } from '@fortawesome/free-solid-svg-icons';
import { faPumpMedical } from '@fortawesome/free-solid-svg-icons';
import { CgSmartHomeBoiler, CgSoftwareDownload } from 'react-icons/cg'
import { GiCctvCamera, GiHumanPyramid, GiTeacher } from 'react-icons/gi'
import { PiFanFill } from 'react-icons/pi'
import { BiCodeBlock, BiLaptop } from 'react-icons/bi'
import { FaUncharted } from 'react-icons/fa'

export const serviceList =
{
    "Electricity":
        [
            {
                // "logo": <MdOutlineHearing className="text-3xl lg:text-4xl" />,
                "logo": <PiFanFill className="text-3xl lg:text-4xl" />,
                "title": "All Home Aplliances",
                "content": "Providing efficient solutions with professional installation, maintenance, and repair services.",
                "list": [
                    "Air Conditioners (AC)",
                    "Televisions (TV)",
                    "Refrigerators",
                    "Ceiling & Table Fans",
                    "Microwave Ovens",
                    "Washing Machines",
                    "Water Heaters & many more"
                ],
                "gap": "mt-0"
            },
            {
                "logo": <FaSatelliteDish className="text-3xl lg:text-4xl" />,
                "title": "D2H Services",
                "content": "Stay connected to your favorite TV channels and entertainment with reliable DTH (Direct-to-Home) services",
                "list": ['Installation/Unistallation',
                    'Comprehensive Channel Setup',
                    'Signal Issue Resolution',
                    'Set-Top Box Repair',
                    'Troubleshooting Technical Problems'],
                "gap": "lg:mt-24"
            },
            {
                "logo": <GiCctvCamera className="text-3xl lg:text-4xl" />,
                "title": "CCTV Cameras",
                "content": "Ensure your property's security with high-quality CCTV camera installations and maintenance services.",
                "list": [
                    "Installation for homes, offices, etc.",
                    "Wired and Wireless Solutions",
                    "Camera Positioning & Adjustment",
                    "Integration with Other Systems",
                    "Motion Detection & Alerts",
                    "Maintenance & Support"
                ],
                "gap": "mt-0"
            },
            {
                "logo": <FaArrowUpFromWaterPump className="text-3xl lg:text-4xl" />,
                "title": "RO Plant & Water Treatment Plant",
                "content": "We provide comprehensive solutions for Reverse Osmosis (RO) plants and water treatment plants, ensuring clean, safe, and purified water for residential, commercial, and industrial applications.",
                "list": [
                    "Installation of RO and water treatment plants",
                    "Regular maintenance and servicing",
                    "Timely Repair & Troubleshooting",
                    "Water Quality Testing",
                    "Wasted Water Reduction",
                    "Pre-Filtration & Post-Treatment",
                    "Installation of Softener & UV System"

                ],
                "gap": "lg:mt-24"
            }, {
                "logo": <MdOutlineLocalLaundryService className="text-3xl lg:text-4xl" />,
                "title": "Industrial Laundry Machine",
                "content": "We offer professional services for industrial laundry machines, ensuring smooth operations and high-efficiency performance in commercial laundry settings.",
                "list": [
                    "Installation of laundry machines",
                    "Laundry System Optimization",
                    " Inspection & Diagnostics of machines",
                    "Energy Efficiency Consulting",
                    "Providing training for staff",
                    "Compliance & Safety",
                    "Parts Replacement (belts, pumps, and valves)"
                ],
                "gap": "mt-0"
            },
            {
                "logo": <FaBolt className="text-3xl lg:text-4xl" />,
                "title": "Power Products",
                "content": "We offer comprehensive services for power products, designed to meet the needs of both residential and commercial customers.",
                "list": [
                    "Installation of generators, UPS, solar , etc.",
                    "Battery Replacement",
                    "Power System Optimization",
                    "Emergency Power Solutions",
                    "Conducting load testing",
                    "Compliance & Safety Checks",
                    "Repairing of malfunctioning power products",
                ],
                "gap": "lg:mt-24"
            }
        ],
    "Medical":
        [
            {
                // "logo": <MdOutlineHearing className="text-3xl lg:text-4xl" /> <FontAwesomeIcon icon={faChair} size="2x" />,
                // "logo": <CgSmartHomeBoiler className="text-3xl lg:text-4xl" />,
                "logo": <MdOutlineHearing icon={faChair} className="text-3xl lg:text-4xl" />,
                "title": "Hearing Aid Machine",
                "content": "Hearing aid machines are essential devices that improve hearing for individuals with hearing impairments. And we provide-",

                "list": [
                    "Hearing Test & Audiogram Update",
                    "Software Updates (Digital Hearing Aids)",
                    "Custom Fitting & Comfort Adjustments",
                    "Guidance & User Education",
                    "Ear Mold & Dome Replacement",
                    "Audio and Performance Calibration",
                    "Battery Replacement or Charging"
                ],
                "gap": "mt-0"
            },
            {
                // "logo": <MdOutlineHearing className="text-3xl lg:text-4xl" /> <FontAwesomeIcon icon={faChair} size="2x" />,
                // "logo": <CgSmartHomeBoiler className="text-3xl lg:text-4xl" />,
                "logo": <FontAwesomeIcon icon={faChair} className="text-3xl lg:text-4xl" />,
                "title": "Dental Chair",
                "content": "Maintaining dental chairs is crucial to ensure patient comfort, operational efficiency, and compliance with hygiene standards.",

                "list": [
                    "Inspection and Maintenance",
                    "Hydraulic and Motor Checks",
                    "Electrical System Evaluation",
                    "Waterline Maintenance",
                    "Accessories and Attachments",
                    "Upholstery Repair and Replacement",
                    "Control Panel and Safety Features & more.."
                ],
                "gap": "mt-0"
            },
            {
                "logo": <FontAwesomeIcon icon={faPumpMedical} className="text-3xl lg:text-4xl" />,
                "title": "Sterilizer/Autoclave",
                "content": "Regular servicing of sterilizers or autoclaves is vital for ensuring optimal performance and maintaining safety standards in healthcare, laboratory, and industrial environments.",
                "list": ['Inspection and Testing',
                    'Cleaning and Descaling',
                    'Calibration of Temperature and Pressure',
                    'Leak Check and Seal Integrity',
                    'Replacement of Worn Parts',
                    'Software and Firmware Updates & more..'],
                "gap": "lg:mt-24"
            },
            {
                "logo": <CgSmartHomeBoiler className="text-3xl lg:text-4xl" />,
                "title": "Boilers",
                "content": "Boiler servicing is essential to ensure that the equipment operates efficiently, safely, and at maximum lifespan. Reduces energy consumption, and ensures compliance with safety standards by maintainance.",
                "list": [
                    "Cleaning of Components",
                    "Pressure Check",
                    "Flue and Ventilation System Inspection",
                    "Thermostat and Controls Calibration",
                    "Burner and Fuel System Inspection",
                    "Check for Gas Leaks (for Gas Boilers)",
                    "Safety Valve Test & more.."
                ],
                "gap": "mt-0"
            },
            {
                "logo": <TbFreezeRowColumn className="text-3xl lg:text-4xl" />,
                "title": "Deep Freezer",
                "content": "Proper servicing ensures energy efficiency, prolongs the lifespan of the freezer, and guarantees optimal performance.",
                "list": [
                    "Cleaning and Defrosting",
                    "Compressor Inspection",
                    "Electrical System Check",
                    "Temperature Check and Calibration",
                    "Gas and Refrigerant Level Check",
                    "Condenser and Evaporator Coil Cleaning",
                    "Inspection of Fans and Airflow System",
                    "Test the Freezer’s Performance"

                ],
                "gap": "lg:mt-24"
            }, {
                "logo": <FontAwesomeIcon icon={faMaskVentilator} className="text-3xl lg:text-4xl" />,
                "title": "Central Oxygen Systems",
                "content": "(COS) require regular maintenance to ensure safe and efficient operation, particularly in clinics, nursing homes. Proper servicing minimizes risks and ensures compliance with safety standards.",
                "list": [
                    "Oxygen Pipeline Inspection",
                    "Oxygen Supply Tank Check",
                    "Alarm and Safety System Test",
                    "Oxygen Flow Control Valves Inspection",
                    "Filter and Regulator Cleaning/Replacement",
                    "Oxygen Concentrator Maintenance (if applicable)"
                ],
                "gap": "mt-0"
            },
            {
                "logo": <FontAwesomeIcon icon={faFilter} className="text-3xl lg:text-4xl" />,
                "title": "Suction Pipeline System",
                "content": "We ensures that the system operates safely and efficiently, providing reliable suction when required. A well-maintained suction system also minimizes the risk of contamination and system failures.",
                "list": [
                    "Pressure Testing",
                    "Suction Unit Inspection:",
                    "Suction Line Check",
                    "Cleaning and Sterilization",
                    "Valve Inspection and Adjustment",
                    "Filter Replacement and Maintenance",
                    "Electrical and Power Check (for electric suction units)"
                ],
                "gap": "lg:mt-24"
            }
        ],
    "H_S":
        [
            {
                "logo": <BiLaptop icon={faPumpMedical} className="text-3xl lg:text-4xl" />,
                "title": "Laptop/Desktop Repair",
                "content": "Whether you're dealing with slow performance, screen damage, or system crashes, laptop/desktop repair services provide professional solutions.",
                "list": ['Networking & Connectivity Solutions',
                    'Screen & Display Repair/Replacement',
                    'Hard Drive & Storage Solutions',
                    'RAM & Memory Upgrade',
                    'Battery Replacement (for Laptops)',
                    "Virus & Malware Removal",
                    'Motherboard & Processor Repair & more..'],
                "gap": "lg:mt-24"
            },
            {
                "logo": <FaUncharted className="text-3xl lg:text-4xl" />,
                "title": "OS Installation",
                "content": "We do OS installation services which involve the setup and configuration of an operating system (such as Windows, macOS, or Linux) the device.",
                "list": [
                    "OS Installation & Setup",
                    "Operating System Upgrades",
                    "Driver Installation",
                    "System Configuration",
                    "Security Configurations",
                    "Software & Application Installation",
                    "Data Backup & Recovery Setup",
                    "Multi-Boot Configuration & more.."
                ],
                "gap": "mt-0"
            },
            {
                "logo": <BiCodeBlock className="text-3xl lg:text-4xl" />,
                "title": "Web Development",
                "content": "We design websites tailored to your business requirements. Whether you need a Single Page Application (SPA), Dynamic Website, Animated Designs, Introductory Pages, or Landing Pages.",
                "list": [
                    "Single Page Applications (SPA)",
                    "Dynamic Websites",
                    "Animated Websites",
                    "Business Websites",
                    "Non-Profit & Charity Websites",
                    "Educational Websites",
                    "E-commerce Websites",
                    "Portfolio Websites & more.."

                ],
                "gap": "lg:mt-24"
            }, {
                "logo": <FaNetworkWired icon={faMaskVentilator} className="text-3xl lg:text-4xl" />,
                "title": "Network Hardware Support",
                "content": "Network hardware support services are designed to maintain, troubleshoot, and optimize your networking infrastructure, ensuring that all components such as routers, switches, firewalls, and wireless access points work efficiently.",
                "list": [
                    "Troubleshooting & Diagnostics",
                    "Network Configuration",
                    "Hardware Repairs & Replacements",
                    "Firmware & Software Updates",
                    "Network Monitoring & Reporting",
                    "Consultation & Advice"
                ],
                "gap": "mt-0"
            },
            {
                "logo": <CgSoftwareDownload icon={faFilter} className="text-3xl lg:text-4xl" />,
                "title": "Software Troubleshooting and Support",
                "content": "Our Software Troubleshooting and Support Service is designed to help individuals and businesses quickly resolve software issues and ensure that your applications and systems run smoothly.",
                "list": [
                    "Bug Fixing & Software Repair",
                    "Performance Optimization",
                    "Software Updates & Upgrades",
                    "Software Installation & Configuration Support",
                    "Security and Data Integrity Support",
                    "Custom Software Solutions & Consultation"
                ],
                "gap": "lg:mt-24"
            }
        ],
    "HR":
        [
            {
                "logo": <GiHumanPyramid icon={faPumpMedical} className="text-3xl lg:text-4xl" />,
                "title": "Potential Human Resource",
                "content": "We provide a comprehensive range of professional and skilled staffing solutions to meet the diverse needs of businesses across various industries for alltypes of work.",
                "list": ['Teaching Sector',
                    'Skilled Teachicians',
                    'Medical staff',
                    'Labours & helpers',
                    'Domestic helpers',
                    'Experienced, Junior, Fresher Staff',
                    "Resources are provided for all types of work"
                ],
                "gap": "lg:mt-24"
            },

        ],
};
