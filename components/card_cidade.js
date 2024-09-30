const card_cidade = (nome, uf)=>
{
    return(
        <View style={styles.card}>
            <Text style={styles.cidade}>{nome}</Text> - 
            <Text style={styles.uf}>{uf}</Text>
        </View>
    );
}
export default card_cidade;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
        width: '100%',
        padding:10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor:'light pink'
    },
    cidade:{
        fontSize:18,
        color: 'light red',
        fontWeight: '600'
    },
    uf:{
        fontSize:18,
        color: 'light gray',
        fontWeight: '900'
    }
  });