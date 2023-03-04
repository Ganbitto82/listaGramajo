import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E4E1E6',
    
    },
     inputContainer: {
      marginHorizontal: 20,
      marginVertical : 40,
      flexDirection : 'row',
      justifyContent: 'space-between',
  
      
      },
     input: {
       width: '70%',
       borderBottomWidth:1,
       borderBottomColor: '#A4ABB7',
     
    },
    listContainer: {
        marginHorizontal: 20,

    },
    listTitle :{
        fontSize :18,
        fontWeight : 'bold',
        marginBottom :10,
        color : '#A4ABB7'

    },

    lisItemConteiner:{
       paddingVertical: 20,
       backgroundColor: '#A4ABB7',
       borderRadius: 10,
       justifyContent : 'center',
       marginVertical :5,
       
    },

    listItem:{
        fontSize: 14,
        color : '#58585A', 
        paddingHorizontal : 10,


    },
    modalContainer:{
        backgroundColor: '#D6DDEA',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop :50,
        padding: 20,
    },
    modalTitle:{
        
        paddingHorizontal : 120,
        fontSize:18,
        fontWeight: 'bold',
        

    },
    modalDetailConteiner:{
        justifyContent: 'center',
        alignContent: 'center',
        paddingVertical:20,
        paddingHorizontal:40,
    },
    modalDetailText:{
        fontSize: 14,
        color: '#212121',

    },
    selectedTask:{
        fontSize:14,
        color : '#212121',
        fontWeight : 'bold',
        paddingVertical: 20,
    },
    modalButtonContainer:{
       //backgroundColor : 'red',
        width: '70%',
        flexDirection : 'row',
        justifyContent : 'space-around',
        marginHorizontal:20,
        
    },
    
  });