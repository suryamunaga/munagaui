import React from 'react'
import styles from './Loader.module.css'
export const Loader = () => {
    return (
        <div>
            <div className={styles.mask}></div>
            <img src="https://www.bing.com/ck/a?!&&p=afcfd96eaa04579aJmltdHM9MTcwNzUyMzIwMCZpZ3VpZD0zYWQ0NDM3Zi1mZWYwLTY1NzktMzBmMC01MzlmZmY1ZDY0MTAmaW5zaWQ9NTY0Ng&ptn=3&ver=2&hsh=3&fclid=3ad4437f-fef0-6579-30f0-539fff5d6410&u=a1L2ltYWdlcy9zZWFyY2g_cT1sb2FkZXIgZ2lmJkZPUk09SVFGUkJBJmlkPTZCREM0N0I4MjhEQ0VEMTZDMEQ0QTAzMjZBMDMyRjhBODYxNzVDODA&ntb=1" alt="Loading..."></img>
        </div>
    )
}

