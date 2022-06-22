import React from "react";
import styles from "../styles/homeview.module.css";

export default function HomeView() {
  return (
    <>
    <div className={styles.containerCard}>
    <div className={styles.homeSpaceTarget}>
        <div className={styles.spaceinfo}>
          <h3 className={styles.homeSpaceTargeth3}>So you want to travel to</h3>
          <h1 className={styles.homeSpaceTargeth1}>SPACE </h1>
          <p className={styles.homeSpaceTargetp}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div >
          <svg
            width="274"
            height="274"
            viewBox="0 0 274 274"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.explore}
          >
            <circle cx="137" cy="137" r="137" fill="white" />
            <path
              d="M64.72 147C64.72 147.064 64.848 147.021 65.104 146.872C65.36 146.701 65.584 146.381 65.776 145.912C65.9893 145.421 66.096 144.717 66.096 143.8V128.088C66.096 127.213 65.9893 126.552 65.776 126.104C65.584 125.635 65.36 125.315 65.104 125.144C64.848 124.973 64.72 124.92 64.72 124.984H76.304V128.184C75.92 126.904 74.768 126.264 72.848 126.264H68.4V135.352H73.904C74.3307 135.352 74.6933 135.288 74.992 135.16C75.2907 135.011 75.5147 134.861 75.664 134.712C75.8133 134.563 75.8987 134.467 75.92 134.424V137.528C75.8987 137.485 75.8133 137.389 75.664 137.24C75.5147 137.091 75.2907 136.952 74.992 136.824C74.7147 136.696 74.3627 136.632 73.936 136.632H68.4V145.72H73.392C74.352 145.72 75.1733 145.528 75.856 145.144C76.56 144.739 77.0613 144.227 77.36 143.608L76.784 147H64.72ZM97.0723 147C97.4563 146.936 97.6483 146.744 97.6483 146.424C97.6483 146.04 97.4883 145.613 97.1683 145.144C96.8483 144.653 96.6669 144.376 96.6243 144.312L92.1443 137.4L87.1203 144.12C86.8003 144.547 86.5443 144.931 86.3523 145.272C86.1816 145.592 86.0963 145.891 86.0963 146.168C86.0963 146.637 86.4376 146.915 87.1203 147H82.3203C82.3203 147.043 82.4483 146.989 82.7043 146.84C82.9603 146.691 83.3229 146.392 83.7923 145.944C84.2829 145.475 84.8696 144.781 85.5523 143.864L91.3763 136.152L86.2243 128.184C85.6269 127.267 85.0936 126.573 84.6243 126.104C84.1549 125.635 83.7709 125.325 83.4723 125.176C83.1736 125.005 83.0243 124.941 83.0243 124.984H88.3683C87.9629 125.069 87.7603 125.272 87.7603 125.592C87.7603 125.912 87.9949 126.435 88.4643 127.16L92.9123 134.072L97.5522 127.928C98.2136 127.053 98.5443 126.349 98.5443 125.816C98.5443 125.325 98.2243 125.048 97.5843 124.984H102.352C102.352 124.963 102.214 125.016 101.936 125.144C101.68 125.251 101.339 125.496 100.912 125.88C100.507 126.243 100.038 126.787 99.5043 127.512L93.6803 135.288L98.8323 143.288C99.5149 144.355 100.123 145.165 100.656 145.72C101.19 146.253 101.616 146.616 101.936 146.808C102.256 146.979 102.416 147.043 102.416 147H97.0723ZM122.075 130.936C122.075 132.173 121.776 133.283 121.179 134.264C120.603 135.224 119.771 135.981 118.683 136.536C117.595 137.091 116.315 137.368 114.843 137.368C113.947 137.368 112.987 137.272 111.963 137.08V144.056C111.963 144.888 112.069 145.528 112.283 145.976C112.496 146.403 112.731 146.691 112.987 146.84C113.243 146.989 113.371 147.043 113.371 147H108.283C108.283 147.043 108.411 146.989 108.667 146.84C108.923 146.691 109.147 146.403 109.339 145.976C109.552 145.549 109.659 144.909 109.659 144.056V128.024C109.659 127.171 109.552 126.52 109.339 126.072C109.147 125.624 108.923 125.325 108.667 125.176C108.411 125.005 108.283 124.941 108.283 124.984H114.555C115.643 124.984 116.539 125.059 117.243 125.208C117.947 125.336 118.565 125.539 119.099 125.816C120.059 126.307 120.795 127.021 121.307 127.96C121.819 128.877 122.075 129.869 122.075 130.936ZM119.611 131.352C119.611 129.837 119.141 128.611 118.203 127.672C117.264 126.733 116.016 126.264 114.459 126.264H111.963V135.832C112.88 136.003 113.84 136.088 114.843 136.088C116.336 136.088 117.499 135.661 118.331 134.808C119.184 133.933 119.611 132.781 119.611 131.352ZM129.19 127.96C129.19 127.107 129.083 126.467 128.87 126.04C128.678 125.592 128.454 125.293 128.198 125.144C127.942 124.995 127.814 124.941 127.814 124.984H132.902C132.902 124.941 132.774 124.995 132.518 125.144C132.262 125.293 132.027 125.592 131.814 126.04C131.6 126.467 131.494 127.107 131.494 127.96V145.72H136.742C137.702 145.72 138.523 145.528 139.206 145.144C139.91 144.739 140.411 144.227 140.71 143.608L140.134 147H127.814C127.814 147.064 127.942 147.021 128.198 146.872C128.454 146.701 128.678 146.381 128.87 145.912C129.083 145.421 129.19 144.717 129.19 143.8V127.96ZM144.829 136.248C144.829 133.987 145.309 131.971 146.269 130.2C147.251 128.429 148.616 127.053 150.365 126.072C152.136 125.091 154.173 124.6 156.477 124.6C158.397 124.6 160.189 125.027 161.853 125.88C163.539 126.712 164.883 127.971 165.885 129.656C166.909 131.341 167.421 133.368 167.421 135.736C167.421 137.997 166.931 140.013 165.949 141.784C164.989 143.555 163.624 144.931 161.853 145.912C160.104 146.893 158.077 147.384 155.773 147.384C153.853 147.384 152.051 146.968 150.365 146.136C148.701 145.283 147.357 144.013 146.333 142.328C145.331 140.643 144.829 138.616 144.829 136.248ZM164.861 136.216C164.861 134.275 164.456 132.525 163.645 130.968C162.856 129.389 161.757 128.163 160.349 127.288C158.963 126.392 157.395 125.944 155.645 125.944C154.045 125.944 152.616 126.349 151.357 127.16C150.12 127.971 149.149 129.123 148.445 130.616C147.741 132.088 147.389 133.805 147.389 135.768C147.389 137.709 147.784 139.469 148.573 141.048C149.384 142.605 150.483 143.832 151.869 144.728C153.277 145.603 154.856 146.04 156.605 146.04C158.205 146.04 159.624 145.635 160.861 144.824C162.12 144.013 163.101 142.872 163.805 141.4C164.509 139.907 164.861 138.179 164.861 136.216ZM180.121 135.928C181.102 135.928 181.955 135.704 182.681 135.256C183.406 134.787 183.95 134.189 184.313 133.464C184.697 132.717 184.889 131.939 184.889 131.128C184.889 130.296 184.707 129.517 184.345 128.792C184.003 128.045 183.47 127.437 182.745 126.968C182.019 126.499 181.134 126.264 180.089 126.264H177.369V144.056C177.369 144.909 177.475 145.56 177.689 146.008C177.902 146.435 178.137 146.723 178.393 146.872C178.649 147 178.777 147.043 178.777 147H173.689C173.689 147.043 173.817 146.989 174.073 146.84C174.329 146.691 174.553 146.403 174.745 145.976C174.958 145.549 175.065 144.909 175.065 144.056V128.056C175.065 127.181 174.958 126.52 174.745 126.072C174.553 125.603 174.329 125.293 174.073 125.144C173.817 124.973 173.689 124.92 173.689 124.984H180.025C181.689 124.984 183.054 125.261 184.121 125.816C185.209 126.349 185.987 127.053 186.457 127.928C186.947 128.781 187.193 129.72 187.193 130.744C187.193 131.597 186.99 132.44 186.585 133.272C186.179 134.083 185.593 134.797 184.825 135.416C184.078 136.013 183.203 136.429 182.201 136.664L181.689 136.76L187.321 143.928C188.067 144.76 188.686 145.4 189.177 145.848C189.667 146.296 190.019 146.595 190.233 146.744C190.467 146.893 190.606 146.979 190.649 147H186.905L178.201 135.928H180.121ZM195.533 147C195.533 147.064 195.661 147.021 195.917 146.872C196.173 146.701 196.397 146.381 196.589 145.912C196.802 145.421 196.909 144.717 196.909 143.8V128.088C196.909 127.213 196.802 126.552 196.589 126.104C196.397 125.635 196.173 125.315 195.917 125.144C195.661 124.973 195.533 124.92 195.533 124.984H207.117V128.184C206.733 126.904 205.581 126.264 203.661 126.264H199.213V135.352H204.717C205.143 135.352 205.506 135.288 205.805 135.16C206.103 135.011 206.327 134.861 206.477 134.712C206.626 134.563 206.711 134.467 206.733 134.424V137.528C206.711 137.485 206.626 137.389 206.477 137.24C206.327 137.091 206.103 136.952 205.805 136.824C205.527 136.696 205.175 136.632 204.749 136.632H199.213V145.72H204.205C205.165 145.72 205.986 145.528 206.669 145.144C207.373 144.739 207.874 144.227 208.173 143.608L207.597 147H195.533Z"
              fill="#0B0D17"
            />
          </svg>
        </div>
      </div>

    </div>
      
    </>
  );
}

const array = ['pedrito', 'marianita', 'juanito', 'apple', 'la mascota', 'mi casa es tu casa'];

//Map nos regresa un nuevo arreglo y hace una operacion en cada interaccion de nuestro arreglo.
const result = array.map((item, index)=>{
    console.log(item,index)
    return `<div>${item}</div>`
}
        
)
const array = [2, 4, 5, 6];

function solution(array) {
  const result = array.map((item)=>{
    console.log(item)
  }) 👈 
}; 