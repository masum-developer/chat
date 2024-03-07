import React, { useState } from 'react';
import {StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import UpArrowSvgComponent from '../svg/UpArrowSvgComponent';
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize,
  } from "react-native-responsive-dimensions";
  
import { useFonts } from "expo-font";
import Svg, { Ellipse,Path } from "react-native-svg"

//..............................chapter data............................
export const chaptersData = [
    {
    id: 1,
    title: "What you’re going to get from this course",
    duration:'30m 08s',
    icon:'complete'
},
{
    id: 2,
    title: "What you’re going to get from this course",
    duration:'30m 08s',
    icon:'video'
},
{
    id: 3,
    title: "What you’re going to get from this course",
    duration:'Read 15 minutes',
    icon:'read'
},
{
    id: 4,
    title: "What you’re going to get from this course",
    duration:'30m 08s',
    icon:'lock'
},

];


export const Button = ({title, btnWidth})=>{
    const [fontsLoaded] = useFonts({
        "WorkSans-Medium": require("../../assets/Fonts/WorkSans-Medium.ttf"),
      });
      if (!fontsLoaded) {
        return <Text>Loading Font...</Text>;
      }
    return(
        <View style=   {[buttonStyles.btnContainer, {width:btnWidth}]}>
        
            <Text style={buttonStyles.buttonName}>{title}</Text>
        </View>
    )
}


const buttonStyles = StyleSheet.create({
    btnContainer:{
   
       backgroundColor:'rgba(84, 106, 126, 1)',
     
       height:responsiveScreenHeight(4.5),
       borderRadius:responsiveScreenWidth(1),
       justifyContent:'center',
       alignItems:'center'
        
    },

    buttonName:{
        fontFamily:'WorkSans-Medium',
        fontSize:responsiveScreenFontSize(1.5),
        color:'white',
        maxWidth:responsiveScreenWidth(70),
      
    }
})


export function DownArrowSvgComponent(props) {
    return (
      <Svg
        width={12}
        height={8}
        viewBox="0 0 12 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M1 1.5l5 5 5-5"
          stroke="#666"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    )
  }

 export  function LineSvgComponentChapterModule(props) {
    return (
      <Svg
        width={300}
        height={2}
        viewBox="0 0 300 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          stroke="#546A7E"
          strokeOpacity={0.2}
          d="M4.37114e-8 1L295 1.00002"
        />
      </Svg>
    )
  }
  
export function ThreeDotSvgComponent(props) {
    return (
      <Svg
        width={13}
        height={3}
        viewBox="0 0 13 3"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Ellipse
          cx={1.44444}
          cy={1.55556}
          rx={1.44444}
          ry={1.44444}
          transform="rotate(-90 1.444 1.556)"
          fill="#000"
          fillOpacity={0.6}
        />
        <Ellipse
          cx={6.49913}
          cy={1.55556}
          rx={1.44444}
          ry={1.44444}
          transform="rotate(-90 6.5 1.556)"
          fill="#000"
          fillOpacity={0.6}
        />
        <Ellipse
          cx={11.5538}
          cy={1.55556}
          rx={1.44444}
          ry={1.44444}
          transform="rotate(-90 11.554 1.556)"
          fill="#000"
          fillOpacity={0.6}
        />
      </Svg>
    )
  }

  export function GreenCircleSvgIcon(props) {
    return (
      <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.413-1.414-5.657 5.657-2.829-2.829-1.414 1.414L11.003 16z"
          fill="#27AC1F"
        />
      </Svg>
    )
  }
  
  //....................play button ..............
 export function PlayButtonSvgComponent(props) {
    return (
      <Svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M7.5 18.333h5c4.166 0 5.833-1.666 5.833-5.833v-5c0-4.167-1.666-5.833-5.833-5.833h-5c-4.167 0-5.833 1.666-5.833 5.833v5c0 4.166 1.666 5.833 5.833 5.833z"
          stroke="#546A7E"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M7.583 10V8.767c0-1.592 1.125-2.233 2.5-1.442l1.067.617 1.066.617c1.375.791 1.375 2.091 0 2.883l-1.066.617-1.067.616c-1.375.792-2.5.142-2.5-1.441V10z"
          stroke="#546A7E"
          strokeWidth={1.5}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    )
  }
  //..................................Read Icon......
  
export function ReadIconSvgComponent(props) {
    return (
      <Svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M10.5 19a8.5 8.5 0 100-17 8.5 8.5 0 000 17z"
          stroke="#546A7E"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M13.639 12.812v-4.19a.684.684 0 00-.754-.692h-.02c-.73.063-1.837.434-2.455.823l-.06.039a.385.385 0 01-.367 0l-.087-.053c-.618-.385-1.723-.753-2.452-.812a.683.683 0 00-.75.69v4.195c0 .334.271.646.604.688l.101.014c.754.1 1.917.482 2.584.847l.013.007a.375.375 0 00.334 0c.666-.368 1.833-.754 2.59-.854l.115-.014a.714.714 0 00.604-.688zM10.166 8.906v5.209M8.69 9.948h-.78M8.951 10.99H7.91"
          stroke="#546A7E"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    )
  }
  //...........................lock icon ...............

  
export function LockIconSvgComponent(props) {
    return (
      <Svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M10.5 19a8.5 8.5 0 100-17 8.5 8.5 0 000 17z"
          stroke="#546A7E"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M8.084 9.472v-.694c0-1.15.347-2.084 2.083-2.084 1.736 0 2.083.934 2.083 2.084v.694M10.167 12.424a.868.868 0 100-1.736.868.868 0 000 1.736z"
          stroke="#546A7E"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M11.903 13.639H8.43c-1.388 0-1.736-.347-1.736-1.736v-.695c0-1.389.348-1.736 1.736-1.736h3.473c1.389 0 1.736.347 1.736 1.736v.695c0 1.389-.347 1.736-1.736 1.736z"
          stroke="#546A7E"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    )
  }
  //.........................Right arrow.......................

  export function RightArrowSvgComponent(props) {
    return (
      <Svg
        width={10}
        height={8}
        viewBox="0 0 10 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M6.215.965L9.25 4 6.215 7.035M.75 4h8.415"
          stroke="#0B2A46"
          strokeWidth={1.3}
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    )
  }
  //..................................................................
const ChapterModules = () => {
    const [chapters, setChapters] = useState(chaptersData);
    const [showChapter,setShowChapter] = useState(false)
    const [fontsLoaded] = useFonts({
        "WorkSans-Medium": require("../../assets/Fonts/WorkSans-Medium.ttf"),
        "WorkSans-Regular": require("../../assets/Fonts/WorkSans-Regular.ttf"),
        
      });
      if (!fontsLoaded) {
        return <Text>Loading Font...</Text>;
      }
    return (
   <View style={chapterStyles.container}>
         <View style={chapterStyles.chapterArea}>
            <View style={chapterStyles.chapterNameArea}>
                <Text style={chapterStyles.chapterName}>Chapter 1 - Working with variable in Python to manage data </Text>
                {
                    showChapter ? <UpArrowSvgComponent onPress={() => setShowChapter(!showChapter)} /> :<DownArrowSvgComponent onPress={() => setShowChapter(!showChapter)} />
                }
                

                
            </View>
            <View style={chapterStyles.lectureArea}>
                <Text style={chapterStyles.lectureDuration}>15 lectures • 1h 30m</Text>
            </View>
            <View style={chapterStyles.btnArea}>
                <Button title={'Chat'} btnWidth={70}/>
                <Button title={'Calendar'} btnWidth={90}/>
                <Button title={'Presentation'} btnWidth={110}/>
            </View>
           
           {
            showChapter===true ? 
            
   <View>
     <View style={chapterStyles.lineContainer}>
                <LineSvgComponentChapterModule/>
            </View>
             <View>
            {chapters && chapters.map((chapter, index) => (
                <View style={chapterStyles.loadChapterTitleContainer} key={chapter.id}>
                    <View style={chapterStyles.loadChapterTitle}>
                        <View>
                            {
                                chapter.icon==='complete' ?  <GreenCircleSvgIcon/>:chapter.icon==='video' ?<PlayButtonSvgComponent/>: chapter.icon==='read' ?<ReadIconSvgComponent/>:chapter.icon==='lock' ?<LockIconSvgComponent/>:null
                            }
                         
                        
                        </View>

                        <View>
                            <Text style={chapterStyles.chapterTitle}>{chapter.title}</Text>
                            <Text style={chapterStyles.duration}>{chapter.duration}</Text>

                        </View>

                    </View>
                    <View>
                        <TouchableOpacity>
                            
                              <ThreeDotSvgComponent/>
                
                        </TouchableOpacity>
                    </View>
                </View>

            ))}
    </View>
    <View style={chapterStyles.lineContainer}>
                <LineSvgComponentChapterModule/>
            </View>
            <TouchableOpacity onPress={()=>{}}>
          <View style={chapterStyles.seeMore}>
                <Text>See More</Text>
                <RightArrowSvgComponent/>
            </View>
          </TouchableOpacity>
   </View>:null
           }
           
      
        </View>
   </View>
    );
};

export default ChapterModules;

const chapterStyles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:responsiveScreenWidth(10),
        backgroundColor:'rgba(255, 255, 255, 1)',
        paddingTop: responsiveScreenHeight(5),
        
        
    },
    chapterArea:{
        borderWidth:1,
        borderColor:'rgba(39, 172, 31, 1)',
        borderRadius:responsiveScreenWidth(2),
        paddingHorizontal:responsiveScreenWidth(4),
        paddingVertical:responsiveScreenHeight(2)
    },
    chapterNameArea:{
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center'
    },
    chapterName:{
        fontFamily:'WorkSans-Medium',
        fontSize:responsiveScreenFontSize(1.7),
        color:'rgba(11, 42, 70, 1)',
        maxWidth:responsiveScreenWidth(60)
    },
    lectureArea:{
        paddingTop: responsiveScreenHeight(1.7),
    },
    lectureDuration:{
        fontSize:responsiveScreenFontSize(1.7),
        color:'rgba(84, 106, 126, 1)',
        fontFamily:"WorkSans-Regular",
        fontWeight:'400'
    },
    btnArea:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingTop: responsiveScreenHeight(1.7),
    },
    lineContainer:{
       
        paddingTop: responsiveScreenHeight(2),
        paddingBottom: responsiveScreenHeight(1),
    },
    loadChapterTitleContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    loadChapterTitle:{
        flexDirection:'row',
        width:responsiveScreenWidth(40),
        gap:responsiveScreenWidth(4),
        paddingVertical:responsiveScreenHeight(1)
    },
    chapterTitle:{
        fontFamily:'WorkSans-Medium',
        color:'rgba(11, 42, 70, 1)',
        fontSize:responsiveScreenFontSize(1.6),
        fontWeight:'500'
    },
    duration:{
        fontFamily:'WorkSans-Medium',
        color:'rgba(84, 106, 126, 1)',
        fontSize:responsiveScreenFontSize(1.4),
        fontWeight:'400',
        paddingTop: responsiveScreenHeight(0.5),
    },
    seeMore:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:responsiveScreenWidth(2),
    
    }
})