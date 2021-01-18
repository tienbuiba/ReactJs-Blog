import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import Button from '@material-ui/core/Button';

/**
* @author
* @function AboutMe
**/


const AboutMe = (props) => {
    return (
        <div style={props.style}>
            <Card >
                <div className="postImageWrapper">


                    <img src={"https://scontent.fhan2-5.fna.fbcdn.net/v/t1.0-9/140185750_1054640855057943_3321388313513109634_o.jpg?_nc_cat=107&ccb=2&_nc_sid=730e14&_nc_ohc=msPUYWwbna0AX8pqJ4D&_nc_ht=scontent.fhan2-5.fna&oh=ff1aa41623241a089cd8961220fa2454&oe=602AB76B"} alt="" />

                </div>

                <div style={{
                    textAlign: 'center', fontSize: '20px', fontFamily: 'Avenir Next'
                }}>
                    <h2>Tiến Bùi</h2>            
                    <p>A Software Engineer student at Hanoi University Of Science And Technology, specializing React Native</p>
                    <h3>ConTact Me</h3>
                    <div className="ok"
              > <Button variant="contained" color="primary" href="https://material-ui.com/components/buttons/">
                      Facebook
                  </Button>

                    <Button variant="contained" href="https://github.com/tienbuiba">
                        Github
              </Button>

 
</div>
                   
                </div>


            </Card>

        </div>
    )

}

export default AboutMe