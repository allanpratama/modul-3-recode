import React, { useState } from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Modal,
} from 'react-native';
import { Button, Container, Content } from 'native-base';

// Dummy Data (Array of Object)
const datas = [
  {
    id: 1,
    title:
      'Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website',
    image:
      'https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg',
  },
  {
    id: 2,
    title: 'Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi',
    image:
      'https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg',
  },
  {
    id: 3,
    title:
      'Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya',
    image:
      'https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg',
  },
  {
    id: 4,
    title: '4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya',
    image:
      'https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg',
  },
  {
    id: 5,
    title:
      'Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring',
    image:
      'https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg',
  },
];

const List = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.view}
        onPress={() => setSelectedItem(item)}
      >
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.text}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Container>
      <Content>
        <FlatList
          data={datas}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </Content>

      <Modal
        animationType="fade"
        transparent={true}
        visible={selectedItem !== null}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image source={{ uri: selectedItem ? selectedItem.image : '' }}
              style={styles.modalImage}
            />
            <Text style={styles.modalText}>
              {selectedItem ? selectedItem.title : ''}
            </Text>
            <Button block primary onPress={() => setSelectedItem(null)}>
              <Text>TUTUP</Text>
            </Button>
          </View>
        </View>
      </Modal>
    </Container>
  );
};

const styles = StyleSheet.create({
  view: {
    padding: 15,
    borderBottomColor: '#dddddd',
    borderBottomWidth: 5,
  },
  image: {
    height: 200,
    width: '100%',
  },
  text: {
    fontSize: 18,
    paddingTop: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalImage: {
    height: 200,
    width: '100%',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default List;
