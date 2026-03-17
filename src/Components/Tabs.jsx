import React from 'react'
import {motion} from 'framer-motion';

const Tabs = ({tabList,activeTab,onChange}) => {
    const getActiveStyle = (value) =>{
        return activeTab === value ? "text-white bg-gradient-to-r from-[#f4a44f] to-[#ac573f]" : "text-secondry bg-transparent";
    };
  return (
    <div className='flex items-center justify-center my-10'>
        <div className='bg-[#fae8d2] rounded-full flex'>
            {tabList.map((tab) => (
                <motion.button
                key={tab.id}
                initial={{opacity: 0.8, scale: 1}}
                animate={{opacity: activeTab === tab.value ? 1 : 0.8, scale: activeTab === tab.value ? 1.05 : 1}}
                transition={{duration: 0.2}}
                className={`text-xs md:text-[15px] ${getActiveStyle(tab.value)} rounded-full px-4 md:px-10 py-[6px] md:px-3`}
                onClick={() => onChange(tab.value)}
                
                >
                    {tab.label}
                </motion.button>
            ))}
        </div>
    </div>
  )
}

export default Tabs
