start
	= header:header NL section:section+ footer:footer? EOF {return {header, section, footer}}
    
header = 
	list_name:([a-zA-Z0-9-() ]+) NL faction_name:([a-zA-Z0-9- ]+) NL detachments_name:([a-zA-Z0-9- ]+) NL battle_size:([a-zA-Z ]+) _ [(] points:([0-9]+) _ "Points)" {
    	return {
        	list_name: list_name.join("").trim(),
            faction_name: faction_name.join("").trim(),
            detachments_name: detachments_name.join("").trim(),
            battle_size: battle_size.join("").trim(),
            points: parseInt(points.join(""))
        }
    }

section 
   = category:("CHARACTERS" / "BATTLELINE" / "DEDICATED TRANSPORTS" / "OTHER DATASHEETS" / "ALLIED UNITS") NL units:unit+  {
   	return {category: category, units: units}
   }

unit
  = unit:unit_name NL subitems:subunit_list? {
      return { unit, subitems: subitems || [] };
    }

unit_name
  = name:[a-zA-Z0-9- ]+ _ "(" _ points:[0-9]+ " Points)" _ {
      return { name: name.join("").trim(), points: parseInt(points.join("")) };
    }

subunit_list
  = subunit+

subunit
  = _ "•" _ qty:[0-9]* ("x ")? enhancements:("Enhancements:")? name:[a-zA-Z0-9-: ]+ NL subitems:subitem_list? NL? { 
  	  if(name.join("").trim() === "Warlord"){
      	return { type: "warlord" };
      }
  
  	  if(enhancements){
      	return { name: name.join("").trim(), type: "enhancements" };
      }
      
      const parsedQty = parseInt(qty.join(""));
  
      if(!subitems){
      	return { quantity: parsedQty, name: name.join("").trim(), type: "unit_item" };
      }

	  return { quantity: parsedQty, name: name.join("").trim(), type: "model", subitems: subitems};
      
    }

subitem_list
  = subitem+

subitem
  = _ "◦" _ qty:[0-9]+ "x " name:[a-zA-Z0-9 ]+ NL {
      return { quantity: parseInt(qty.join("")), name: name.join("").trim() };
    }
    
footer
	= "Exported with App Version: v" app_version:([0-9.() ]+)", Data Version: v" data_version:([0-9.]+) NL? { 
    return { full: text().trim(), app_version: app_version.join("").trim(), data_version: data_version.join("").trim() } 
  }

_  = [ \t]*  // match any whitespace characters (spaces or tabs)
NL = [\n\r]+  // match newlines (either '\n' or '\r\n')
EOF = !.  // match end of input (anything that isn't matched, i.e., end of input)
