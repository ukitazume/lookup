# Lookups


## Tasks
### remains
function on / off  
pick up sentence  
oauth(goole, twitter, facebook...)  
cross domain authentication  
parmanent link, sharing items  
quiz  
popup dictionary  
local <-> server database sync  
user table  

### done



## Mongoose schemas
```
var lookupSchema = new mongoose.Schema({  
  url: {type: String, index: true},  
  title: {type: String},  
  word: {type: String},  
  sentence: {type: String},  
  user_id: {type: Number},  
  private: {type: Boolean},  
  created: {type: Date, default: Date.now, required: true}  
});  
var Lookup = mongoose.model('Lookup', lookupSchema);
```


## Some thoughts about structure
### user table
```
{
  id:
  mail:
  pass:
  facebook:
  twitter:
}
```

### words table
```
{
  id: 65143,
  note: 'dafafaf',
  private: true // default true
},
{
  id: 132451, // unique
  sentence: 'mongo is cool.', // required
  url: 'url1',
  words: ['mongo', 'cool'],
  definition: 'document db',
  private: true,
  user_id: '13c2b49a96',
  update_at: '2013-12-16'
},
{
  sentence: 'mongo will cool.',
  url: 'url1',
  words: ['mongo'],
  definition: 'document db',
  note: 'hoge',
  user_id: '13c2b49a96',
  update_at: '2013-12-16'
},
{
  word: 'mysql',
  url: 'url2',
  update_at: '2013-11-15'
},
{
  word: 'postgres',
  url: 'url1',
  update_at: '2013-07-05'
},
..
```

## url uniqe Structure
### schema
```
{
  url: 'google',
  words: [slept: {model: 'sleep', en: 'MONG'}, mysql: {en: 'MY_SQL', ..}, ..],
  contents: 'title: afdhafd   body: hogehogehoge',
  user_id: '1341',
  updated: '2013-12-16'
},
{
  url: 'google',
  words: [riak: {en: 'RIAK', ..}, mysql: {en: 'MY_SQL'}, ..],
  user_id: '531413',
  updated: '2013-12-16'
},
{
  url: 'yahoo',
  words: [melissa: 'MELISSA', ..]
  ..
},
..
```

## APIs
find('url1').words.keys();
  
