import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {set,get} from './services';

export default function ScrollToTop(app) {
  const { pathname ,search} = useLocation();
     const params = new URLSearchParams(search); //AVN
     if((params.get("campaign_id")!=null)&&(params.get("affiliate_id")!=null)&&(params.get("affiliate_type")!=null))
     {
      set("campaign_id",params.get("campaign_id"));
      set("affiliate_id",params.get("affiliate_id"));
      set("affiliate_type",params.get("affiliate_type"));//Avn  
    }
    // else
    // {    
    //   set("campaign_id",1);
    //   set("affiliate_id",1);
    //   set("affiliate_type",1);
    // }
  //console.log(get("campaign_id"));
  //console.log(get("affiliate_id"));
  //console.log(get("affiliate_id")); 
  console.log("Path name",pathname);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}