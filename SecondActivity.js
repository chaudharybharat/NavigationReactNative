class SecondActivity extends Component
{
  static navigationOptions =
  {
     title: 'SecondActivity',
  };

  render()
  {
     return(
        <View style = { styles.MainContainer }>

           <Text style = { styles.TextStyle }> This is SecondActivity </Text>

        </View>
     );
  }
}
