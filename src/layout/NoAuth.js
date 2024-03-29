import React from 'react'

function NoAuth(props) {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            paddingTop: '40px',
            paddingTottom: '40px',
            height: '100vh',
            backgroundColor: '#f5f5f5',
            width: '100%'
           
        }}>
             <div className="form-signin" style={{
                    width:'100%',
                    maxWidth:'330px',
                    padding:'15px',
                    margin:'auto',
                    textAlign: 'center'
                }}>
                <img className="mb-4" src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                {props.children}
            </div>
        </div>
    )
}

export default NoAuth
