import ProgressBarVector from '../assets/Vector_ProgressBar.png'

// const ProgressBarContainer = styled.div`
//     width: 100%;
//     height: 21px;
//     background-color: #fff;
//     position: relative;
//     ::before{
//         content: '';
//         position: absolute;
//         width: 100%;
//         height: 100%;
//         background: url(${ProgressBarVector}) no-repeat;
//         background-size: 100% 100%;
//     }
// `

export  function ProgressBarContainer({children, ...props}) {
  return (
    <div {...props}>
        {children}
    </div>
  )
}

export function ProgressBar({meta, producidas, ...props}) {
    return(
        <div {...props} style={{
            width: `${producidas/meta*100}%`,
            height: '100%',
            backgroundColor: '#25aebd',
            transition: 'all 2s ease-in-out'
        }}>
        </div>
    )
}