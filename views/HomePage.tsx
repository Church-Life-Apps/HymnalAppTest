import { Button, Input, Layout, Toggle } from "@ui-kitten/components";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import LyricViewer from "../components/LyricViewer";
import SongViewer from "../components/SongViewer";
import * as Device from 'expo-device';

const HomePage = () => {
  var [hymnalNumber, setHymnalNumber] = useState<number>(303);
  var [searchText, setSearchText] = useState<string>('303');
  var [lyricsOnlyMode, setLyricsOnlyMode] = useState<boolean>(true);

  const onNumberChange = (text: string) => {
    setSearchText(text);
    setHymnalNumber(isNaN(+text) ? hymnalNumber : +text);
    console.log(text);
  }

  return (
    <Layout level='2' style={ styles.layout }>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <Input
          keyboardType="number-pad"
          placeholder="Hymnal Number"
          style={{...styles.defaultMargin, flex: 3 }}
          onChangeText={onNumberChange}
          value={searchText}
        />
              { Device.brand != null ? (
        <Button
          onPress={() => {setLyricsOnlyMode(false)}}
          style={{...styles.defaultMargin, flex: 1 }}
          size='tiny'
        >           Sheet Music
        </Button>) : (
          <></>
        )
        }

        {/*
        <Toggle
          checked={lyricsOnlyMode}
          style={{...styles.defaultMargin, flex: 1 }}
          onChange={() => setLyricsOnlyMode(!lyricsOnlyMode)}
        >
          Lyrics Only
        </Toggle>
        */}
      </View>
      <View style={{flex: 8}}>
        {lyricsOnlyMode ? <LyricViewer songNumber={hymnalNumber}/> : <SongViewer songNumber={hymnalNumber} setLyricsOnlyMode={setLyricsOnlyMode} />}
      </View>
    </Layout>
  )
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
  },
  defaultMargin: {
    marginHorizontal: 20,
    marginVertical: 0
  },
  textInput: {
    //paddingHorizontal: 20, fontSize: 15, color: '#ccccef',
    //paddingVertical: 10
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    marginHorizontal: 16,
  },
  searchBar: {
  }
});

export default HomePage;