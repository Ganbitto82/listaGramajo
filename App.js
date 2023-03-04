import { TextInput,Button, View ,Text, FlatList, Modal, Touchable, TouchableOpacity} from 'react-native';
import  { styles } from './styles'
import { useState } from 'react';

export default function App() {
  const [task, setTask] = useState ('');
  const [taskList, setTaskList] = useState ([]);
  const [modalVisible,setModalVisible] = useState ( false);
  const [selectedTask, setSelectedTask] = useState (null);

  const onHandleTask = () => {
    setTaskList ((prevTaskList) => [...prevTaskList , {id: Math.random().toString() ,  value:task}]);
    setTask ('');



  };
  const onHandleSelected = (item) => {
    setSelectedTask(item);
    setModalVisible(!modalVisible);

  };

  const renderItem = ({ item})=> (
    <TouchableOpacity key ={ item.id}style={styles.lisItemConteiner}  onPress={() => onHandleSelected (item)} >
               <Text style={styles.listItem} > {item.value}</Text>
             </TouchableOpacity> 

   )

   const onHandleCancel = () => {
    setModalVisible(!modalVisible);

   };
   const onHandleDelete = () => {
    setTaskList ((prevTaskList) => prevTaskList.filter((item)=> item.id != selectedTask.id)
    
   );
   setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      
       <View style ={styles.inputContainer}>
        <TextInput style={styles.input}
          value={task} 
          placeholder = "Introduzca un Item"
          onChangeText = {text => {
            console.warn(text);
            setTask(text); }} 

          /> 
         <Button disabled= {!task} title='Agregar' color = '#A4ABB7' onPress={onHandleTask}/>
       </View>
       
       <View>
          <View style={styles.listContainer}>
            <Text style={styles.listTitle}> Lista de contenido</Text>
            <FlatList 
               style = {styles.listContainer}
               data={taskList}
               renderItem = {renderItem}
               keyExtractor = {item => item.id}
            
            />
            <Modal  visible={modalVisible} animationType ='fade'>
               <View style={styles.modalContainer}>
                 <Text style ={styles.modalTitle}>Task Detail </Text>           
               
                    <View style={styles.modalDetailConteiner}>
                    <Text style={styles.modalDetailText}>Estas seguro que quieres eliminar este elemento de la lista ?</Text>
                    <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
               
                     <View style={styles.modalButtonContainer}>
                       <Button 
                          title='Cancelar'
                          color= ' #3C4F76'
                          onPress={onHandleCancel}
                        />
                        <Button 
                         title='Eliminar'
                         color =' #3C4F76'
                         onPress={onHandleDelete}
                         />
                    </View>    
                </View>
               </View>
            </Modal>
          </View>
        </View>
     </View>         
  );
}