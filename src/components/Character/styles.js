const styles = () => ({
  root: {
    background: '#0d739a',
    color: '#f0f0f0',
    textAlign: 'center',
    boxShadow: '5px 5px 10px #323232',
    '&:hover': {
    boxShadow: '10px 10px 40px #323232',
    }
  },
  img: {
    margin: '10px',
    borderRadius: '50%',
    border: 'solid 5px #72f522',
    height: 'auto',
    maxWidth: '200px',
  },

  text: {
    margin: '2px',
    fontSize: '18px',
    background: '#44281d',
    borderRadius: '5px',
  }
  
})

export default styles
