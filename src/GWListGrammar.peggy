List
 = Units _ NewLine _ !.
 
Units
	= Unit|.., NewLine|
    
Unit
	= u:UnitLine NewLine mw:ModelsOrWeapons { return {unit: u, mw: mw}; }
   
ModelsOrWeapons "models or unit weapons"
	= Models / UnitWeapons
    
UnitLine
	= name:UnitName points:UnitPoints { return {name: name, points: points}; }
    
UnitName
	= [ A-z0-9]+ { return text().trim(); }
    
UnitPoints
	= [(]v:UnitPointValue _ ("Points"/"points")[)] { return v; }
    
UnitPointValue
	= [0-9]+ { return parseInt(text(), 10); }
    
Models "models"
    = Model|.., NewLine|
    
Model "model"
	= _4 m:ModelLine NewLine w:ModelWeapons { return {model: m, weapons: w};}
    
ModelLine "model line"
	= modelCount:ModelCount [x] _ modelName:ModelName { return {count: modelCount, name: modelName}; }
    
ModelName
	= [ A-z0-9]+ { return text().trim(); }

ModelCount
	= [0-9] { return parseInt(text(), 10); }
    
UnitWeapons "unit weapons"
	= UnitWeapon|.., NewLine|
    
UnitWeapon "unit weapon"
	= _4 w:WeaponLine { return w }
    
ModelWeapons "model weapons"
	= ModelWeapon|.., NewLine|
    
ModelWeapon "model weapon"
	= _6 w:WeaponLine { return w }
    
WeaponLine "model weapon line"
	= weaponCount:WeaponCount [x] _ weaponName:WeaponName { return {name: weaponName, count: weaponCount}; }
    
WeaponCount "weapon count"
	= [0-9] { return parseInt(text(), 10); }
    
WeaponName "weapon name"
	= [ A-z0-9]+ { return text().trim(); }

NewLine
	= [\n\r]+

_4 "4 whitespace"
	= [ •◦]|4|
    
_6 "6 whitespace"
	= [ •◦]|6..7|

_ "whitespace"
  = [ •◦]*