import {motion} from "framer-motion"

export const Cloud=()=>{
    //#76AFEB
    const varint={
        hidden:{
            pathLength:0,
            fill:"#76AFEB22",
            strokeWidth:3,
        },
        visible:{
            pathLength:3,
            fill:"#76AFEBEE",
            stroke:"#76AFEB",
            strokeWidth:14,
            transition:{
                default: { duration: 3, ease: "easeIn" },
                fill: { duration: 2, ease: [1, 0, 1, 1] },
                stroke: { duration: 3, ease: [1, 0, 0.8, 1] },
                strokeWidth:{delay:1,duration: 3, ease: [1, 0, 0.8, 1]}
            }
        }
    }
    
    return <motion.svg initial={{x:-100}} animate={{x:0,transition:{x:{duration:2}}}} width="512" height="512">
        <motion.path variants={varint} initial={"hidden"} animate={"visible"}  d="M0 0 C11.03831523 10.40016263 18.14415909 22.32475894 22.4375 36.79296875 C22.75460937 37.76878906 23.07171875 38.74460937 23.3984375 39.75 C24.65895954 43.69925025 25.4375 46.59651505 25.4375 50.79296875 C26.80068359 50.68855469 26.80068359 50.68855469 28.19140625 50.58203125 C43.38029307 49.92774074 56.15129396 55.19916484 67.4375 65.48828125 C79.2386623 76.6077356 86.8387914 89.83023129 87.60546875 106.4296875 C87.81626238 124.25931543 83.54481478 139.10069639 71.1015625 152.38671875 C69.4375 153.79296875 69.4375 153.79296875 67.4375 153.79296875 C67.20289063 154.39109375 66.96828125 154.98921875 66.7265625 155.60546875 C64.27714469 159.76205655 59.5646094 161.52794273 55.4375 163.79296875 C54.43976563 164.37111328 54.43976563 164.37111328 53.421875 164.9609375 C42.41721069 170.99500764 30.58943537 171.23467118 18.37231445 171.19702148 C16.68385876 171.2027358 14.99540692 171.20970413 13.30696106 171.21781921 C8.75290001 171.23565337 4.19903268 171.23460013 -0.35505271 171.22887683 C-4.17401581 171.2257693 -7.99294254 171.23189507 -11.81190044 171.23791558 C-20.83288348 171.25192867 -29.85377177 171.25042775 -38.87475586 171.23901367 C-48.13946467 171.22754924 -57.40388342 171.24158732 -66.66855401 171.26841015 C-74.65882502 171.29066577 -82.64900565 171.29718204 -90.63930541 171.29133373 C-95.39553483 171.28798479 -100.15157864 171.29023981 -104.9077816 171.30758476 C-109.38711411 171.32320888 -113.86602215 171.31892966 -118.34533882 171.30027962 C-119.97495323 171.29663535 -121.60460018 171.2995781 -123.23418427 171.31016541 C-146.20745069 171.44784511 -165.53044507 165.0365492 -182.6875 149.16796875 C-197.65341474 133.4952449 -203.27648001 114.50359481 -202.8671875 93.30859375 C-202.08522615 74.37349663 -193.19434056 57.56805955 -179.5625 44.79296875 C-165.57702661 32.25210264 -150.94919507 27.56630482 -132.5625 25.79296875 C-132.31371094 24.93058594 -132.06492187 24.06820312 -131.80859375 23.1796875 C-125.15172085 5.08718341 -107.82698873 -7.90847715 -91.0625 -16.01953125 C-59.06901985 -29.67701391 -25.92336186 -22.32728575 0 0 Z "  transform="translate(277.5625,242.20703125)"/>
    </motion.svg>
}