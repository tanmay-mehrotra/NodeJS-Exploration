/*!CK:1971848682!*//*1407118702,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["CUOWT"]); }

__d("legacy:tokenizerpro",["tokenizerpro"],function(a,b,c,d){a.tokenizer=b('tokenizerpro');},3);
__d("SearchFunnelTypeaheadLogger",["Banzai","DOM","Event","PageTransitions","SubscriptionsHandler","URI"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m='search_funnel',n={focus:'entrant',render:'results_displayed',keydown:'interaction',select:'search'},o={init:function(p,q){if(!p||!q)return;this._sampleRates=q;this._core=p.getCore();this._data=p.getData();this._view=p.getView();this._handler=new k();this.log=this.log.bind(this);this.onKeydown=this.onKeydown.bind(this);this.onSelect=this.onSelect.bind(this);this.onTypeaheadImpression=this.onTypeaheadImpression.bind(this);this._transitionInProgress=true;this.onTypeaheadImpression();},onTypeaheadImpression:function(p){if(this._transitionInProgress&&h.scry(document.body,'.fbPhotoSnowlift').length===0)this.log('impression',{funnel_path:l.getNextURI().path});this.reset();this._handler.addSubscriptions(this._core.subscribeOnce('focus',this.log),this._view.subscribeOnce('render',this.log),this._view.subscribeOnce('select',this.onSelect));i.listen(this._core.getElement(),'keydown',this.onKeydown);j.registerHandler(function(){this._transitionInProgress=true;}.bind(this));j.registerCompletionCallback(this.onTypeaheadImpression);},onKeydown:function(event){if(!this._sawKeydown){this._sawKeydown=true;this.log('keydown',event);}},onSelect:function(event,p){p.funnel_data={selected_position:p.selected.globalIndex,selected_type:p.selected.type};if(p.selected.isNullState){p.funnel_data.interaction_type='null_state';}else if(p.selected.isSingleState){p.funnel_data.interaction_type='single_state';}else p.funnel_data.interaction_type='typed';this.log(event,p);},reset:function(){this._handler.release();this._handler.engage();this._sawKeydown=false;this._transitionInProgress=false;},log:function(p,q){if(n[p])p=n[p];if(!this._sampleRates[p])return;q=q||{};q.funnel_data=q.funnel_data||{};q.funnel_data.sample_rate=this._sampleRates[p];q.funnel_data.current_event_time=Date.now();if(this._prevTime&&this._prevEvt){q.funnel_data.previous_event_time=this._prevTime;q.funnel_data.previous_event=this._prevEvt;}this._prevTime=q.funnel_data.current_event_time;this._prevEvt=p;g.post(m,{funnel_data:q.funnel_data,path:q.funnel_path||j.getMostRecentURI().path,stage:p},g.VITAL);}};e.exports=o;},null);