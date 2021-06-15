gdjs.New_32scene2Code = {};
gdjs.New_32scene2Code.GDBlueFloorObjects1= [];
gdjs.New_32scene2Code.GDBlueFloorObjects2= [];
gdjs.New_32scene2Code.GDBlueFloorObjects3= [];
gdjs.New_32scene2Code.GDBluePlatformObjects1= [];
gdjs.New_32scene2Code.GDBluePlatformObjects2= [];
gdjs.New_32scene2Code.GDBluePlatformObjects3= [];
gdjs.New_32scene2Code.GDKnightObjects1= [];
gdjs.New_32scene2Code.GDKnightObjects2= [];
gdjs.New_32scene2Code.GDKnightObjects3= [];
gdjs.New_32scene2Code.GDAdventureBoyObjects1= [];
gdjs.New_32scene2Code.GDAdventureBoyObjects2= [];
gdjs.New_32scene2Code.GDAdventureBoyObjects3= [];
gdjs.New_32scene2Code.GDBasketBall2Objects1= [];
gdjs.New_32scene2Code.GDBasketBall2Objects2= [];
gdjs.New_32scene2Code.GDBasketBall2Objects3= [];
gdjs.New_32scene2Code.GDscoreObjects1= [];
gdjs.New_32scene2Code.GDscoreObjects2= [];
gdjs.New_32scene2Code.GDscoreObjects3= [];
gdjs.New_32scene2Code.GDCoinObjects1= [];
gdjs.New_32scene2Code.GDCoinObjects2= [];
gdjs.New_32scene2Code.GDCoinObjects3= [];
gdjs.New_32scene2Code.GDAdventureGirlObjects1= [];
gdjs.New_32scene2Code.GDAdventureGirlObjects2= [];
gdjs.New_32scene2Code.GDAdventureGirlObjects3= [];
gdjs.New_32scene2Code.GDFlatBoyObjects1= [];
gdjs.New_32scene2Code.GDFlatBoyObjects2= [];
gdjs.New_32scene2Code.GDFlatBoyObjects3= [];
gdjs.New_32scene2Code.GDDoorObjects1= [];
gdjs.New_32scene2Code.GDDoorObjects2= [];
gdjs.New_32scene2Code.GDDoorObjects3= [];
gdjs.New_32scene2Code.GDDevoTheDevilObjects1= [];
gdjs.New_32scene2Code.GDDevoTheDevilObjects2= [];
gdjs.New_32scene2Code.GDDevoTheDevilObjects3= [];
gdjs.New_32scene2Code.GDNewObjectObjects1= [];
gdjs.New_32scene2Code.GDNewObjectObjects2= [];
gdjs.New_32scene2Code.GDNewObjectObjects3= [];
gdjs.New_32scene2Code.GDNewObject2Objects1= [];
gdjs.New_32scene2Code.GDNewObject2Objects2= [];
gdjs.New_32scene2Code.GDNewObject2Objects3= [];
gdjs.New_32scene2Code.GDNewObject3Objects1= [];
gdjs.New_32scene2Code.GDNewObject3Objects2= [];
gdjs.New_32scene2Code.GDNewObject3Objects3= [];
gdjs.New_32scene2Code.GDNewObject4Objects1= [];
gdjs.New_32scene2Code.GDNewObject4Objects2= [];
gdjs.New_32scene2Code.GDNewObject4Objects3= [];
gdjs.New_32scene2Code.GDNinjaGirlObjects1= [];
gdjs.New_32scene2Code.GDNinjaGirlObjects2= [];
gdjs.New_32scene2Code.GDNinjaGirlObjects3= [];
gdjs.New_32scene2Code.GDBronzeBoltObjects1= [];
gdjs.New_32scene2Code.GDBronzeBoltObjects2= [];
gdjs.New_32scene2Code.GDBronzeBoltObjects3= [];

gdjs.New_32scene2Code.conditionTrue_0 = {val:false};
gdjs.New_32scene2Code.condition0IsTrue_0 = {val:false};
gdjs.New_32scene2Code.condition1IsTrue_0 = {val:false};
gdjs.New_32scene2Code.condition2IsTrue_0 = {val:false};
gdjs.New_32scene2Code.condition3IsTrue_0 = {val:false};
gdjs.New_32scene2Code.conditionTrue_1 = {val:false};
gdjs.New_32scene2Code.condition0IsTrue_1 = {val:false};
gdjs.New_32scene2Code.condition1IsTrue_1 = {val:false};
gdjs.New_32scene2Code.condition2IsTrue_1 = {val:false};
gdjs.New_32scene2Code.condition3IsTrue_1 = {val:false};


gdjs.New_32scene2Code.eventsList0 = function(runtimeScene) {

{


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
{gdjs.New_32scene2Code.conditionTrue_1 = gdjs.New_32scene2Code.condition0IsTrue_0;
gdjs.New_32scene2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8264852);
}
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Simple Jump 004.wav", false, 50, 1);
}}

}


};gdjs.New_32scene2Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.New_32scene2Code.GDKnightObjects1, gdjs.New_32scene2Code.GDKnightObjects2);


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
gdjs.New_32scene2Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene2Code.GDKnightObjects2.length;i<l;++i) {
    if ( gdjs.New_32scene2Code.GDKnightObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.New_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene2Code.GDKnightObjects2[k] = gdjs.New_32scene2Code.GDKnightObjects2[i];
        ++k;
    }
}
gdjs.New_32scene2Code.GDKnightObjects2.length = k;}if ( gdjs.New_32scene2Code.condition0IsTrue_0.val ) {
{
{gdjs.New_32scene2Code.conditionTrue_1 = gdjs.New_32scene2Code.condition1IsTrue_0;
gdjs.New_32scene2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8266756);
}
}}
if (gdjs.New_32scene2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32scene2Code.GDKnightObjects2 */
{for(var i = 0, len = gdjs.New_32scene2Code.GDKnightObjects2.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDKnightObjects2[i].setAnimationName("Walk");
}
}}

}


{

/* Reuse gdjs.New_32scene2Code.GDKnightObjects1 */

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
gdjs.New_32scene2Code.condition1IsTrue_0.val = false;
gdjs.New_32scene2Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene2Code.GDKnightObjects1.length;i<l;++i) {
    if ( !(gdjs.New_32scene2Code.GDKnightObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.New_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene2Code.GDKnightObjects1[k] = gdjs.New_32scene2Code.GDKnightObjects1[i];
        ++k;
    }
}
gdjs.New_32scene2Code.GDKnightObjects1.length = k;}if ( gdjs.New_32scene2Code.condition0IsTrue_0.val ) {
{
gdjs.New_32scene2Code.condition1IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "b"));
}if ( gdjs.New_32scene2Code.condition1IsTrue_0.val ) {
{
{gdjs.New_32scene2Code.conditionTrue_1 = gdjs.New_32scene2Code.condition2IsTrue_0;
gdjs.New_32scene2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8268060);
}
}}
}
if (gdjs.New_32scene2Code.condition2IsTrue_0.val) {
/* Reuse gdjs.New_32scene2Code.GDKnightObjects1 */
{for(var i = 0, len = gdjs.New_32scene2Code.GDKnightObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDKnightObjects1[i].setAnimationName("Idle");
}
}}

}


};gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDBasketBall2Objects1Objects = Hashtable.newFrom({"BasketBall2": gdjs.New_32scene2Code.GDBasketBall2Objects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDKnightObjects1Objects = Hashtable.newFrom({"Knight": gdjs.New_32scene2Code.GDKnightObjects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.New_32scene2Code.GDCoinObjects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDKnightObjects1Objects = Hashtable.newFrom({"Knight": gdjs.New_32scene2Code.GDKnightObjects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDFlatBoyObjects1Objects = Hashtable.newFrom({"FlatBoy": gdjs.New_32scene2Code.GDFlatBoyObjects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDKnightObjects1Objects = Hashtable.newFrom({"Knight": gdjs.New_32scene2Code.GDKnightObjects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDAdventureBoyObjects1Objects = Hashtable.newFrom({"AdventureBoy": gdjs.New_32scene2Code.GDAdventureBoyObjects1});gdjs.New_32scene2Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.New_32scene2Code.GDAdventureBoyObjects1, gdjs.New_32scene2Code.GDAdventureBoyObjects2);

gdjs.copyArray(gdjs.New_32scene2Code.GDKnightObjects1, gdjs.New_32scene2Code.GDKnightObjects2);


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene2Code.GDAdventureBoyObjects2.length;i<l;++i) {
    if ( gdjs.New_32scene2Code.GDAdventureBoyObjects2[i].getX() > (( gdjs.New_32scene2Code.GDKnightObjects2.length === 0 ) ? 0 :gdjs.New_32scene2Code.GDKnightObjects2[0].getPointX("")) ) {
        gdjs.New_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene2Code.GDAdventureBoyObjects2[k] = gdjs.New_32scene2Code.GDAdventureBoyObjects2[i];
        ++k;
    }
}
gdjs.New_32scene2Code.GDAdventureBoyObjects2.length = k;}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene2Code.GDKnightObjects2 */
{for(var i = 0, len = gdjs.New_32scene2Code.GDKnightObjects2.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDKnightObjects2[i].getBehavior("Tween").addObjectPositionTween("hitC", (gdjs.New_32scene2Code.GDKnightObjects2[i].getPointX("")) - 100, (gdjs.New_32scene2Code.GDKnightObjects2[i].getPointY("")) - 20, "easeOutQuart", 500, false);
}
}}

}


{

/* Reuse gdjs.New_32scene2Code.GDAdventureBoyObjects1 */
/* Reuse gdjs.New_32scene2Code.GDKnightObjects1 */

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene2Code.GDAdventureBoyObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene2Code.GDAdventureBoyObjects1[i].getX() < (( gdjs.New_32scene2Code.GDKnightObjects1.length === 0 ) ? 0 :gdjs.New_32scene2Code.GDKnightObjects1[0].getPointX("")) ) {
        gdjs.New_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene2Code.GDAdventureBoyObjects1[k] = gdjs.New_32scene2Code.GDAdventureBoyObjects1[i];
        ++k;
    }
}
gdjs.New_32scene2Code.GDAdventureBoyObjects1.length = k;}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene2Code.GDKnightObjects1 */
{for(var i = 0, len = gdjs.New_32scene2Code.GDKnightObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDKnightObjects1[i].getBehavior("Tween").addObjectPositionTween("hitC", (gdjs.New_32scene2Code.GDKnightObjects1[i].getPointX("")) + 100, (gdjs.New_32scene2Code.GDKnightObjects1[i].getPointY("")) - 20, "easeOutQuart", 500, false);
}
}}

}


};gdjs.New_32scene2Code.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs.New_32scene2Code.GDKnightObjects1 */

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene2Code.GDKnightObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene2Code.GDKnightObjects1[i].hasAnimationEnded() ) {
        gdjs.New_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene2Code.GDKnightObjects1[k] = gdjs.New_32scene2Code.GDKnightObjects1[i];
        ++k;
    }
}
gdjs.New_32scene2Code.GDKnightObjects1.length = k;}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


};gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDAdventureBoyObjects1Objects = Hashtable.newFrom({"AdventureBoy": gdjs.New_32scene2Code.GDAdventureBoyObjects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDBasketBall2Objects1Objects = Hashtable.newFrom({"BasketBall2": gdjs.New_32scene2Code.GDBasketBall2Objects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDKnightObjects1Objects = Hashtable.newFrom({"Knight": gdjs.New_32scene2Code.GDKnightObjects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDAdventureGirlObjects1Objects = Hashtable.newFrom({"AdventureGirl": gdjs.New_32scene2Code.GDAdventureGirlObjects1});gdjs.New_32scene2Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.New_32scene2Code.GDAdventureGirlObjects1, gdjs.New_32scene2Code.GDAdventureGirlObjects2);

gdjs.copyArray(gdjs.New_32scene2Code.GDKnightObjects1, gdjs.New_32scene2Code.GDKnightObjects2);


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene2Code.GDAdventureGirlObjects2.length;i<l;++i) {
    if ( gdjs.New_32scene2Code.GDAdventureGirlObjects2[i].getX() > (( gdjs.New_32scene2Code.GDKnightObjects2.length === 0 ) ? 0 :gdjs.New_32scene2Code.GDKnightObjects2[0].getPointX("")) ) {
        gdjs.New_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene2Code.GDAdventureGirlObjects2[k] = gdjs.New_32scene2Code.GDAdventureGirlObjects2[i];
        ++k;
    }
}
gdjs.New_32scene2Code.GDAdventureGirlObjects2.length = k;}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene2Code.GDKnightObjects2 */
{for(var i = 0, len = gdjs.New_32scene2Code.GDKnightObjects2.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDKnightObjects2[i].getBehavior("Tween").addObjectPositionTween("hitC", (gdjs.New_32scene2Code.GDKnightObjects2[i].getPointX("")) - 100, (gdjs.New_32scene2Code.GDKnightObjects2[i].getPointY("")) - 20, "easeOutQuart", 500, false);
}
}}

}


{

/* Reuse gdjs.New_32scene2Code.GDAdventureGirlObjects1 */
/* Reuse gdjs.New_32scene2Code.GDKnightObjects1 */

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene2Code.GDAdventureGirlObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene2Code.GDAdventureGirlObjects1[i].getX() < (( gdjs.New_32scene2Code.GDKnightObjects1.length === 0 ) ? 0 :gdjs.New_32scene2Code.GDKnightObjects1[0].getPointX("")) ) {
        gdjs.New_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene2Code.GDAdventureGirlObjects1[k] = gdjs.New_32scene2Code.GDAdventureGirlObjects1[i];
        ++k;
    }
}
gdjs.New_32scene2Code.GDAdventureGirlObjects1.length = k;}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene2Code.GDKnightObjects1 */
{for(var i = 0, len = gdjs.New_32scene2Code.GDKnightObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDKnightObjects1[i].getBehavior("Tween").addObjectPositionTween("hitC", (gdjs.New_32scene2Code.GDKnightObjects1[i].getPointX("")) + 100, (gdjs.New_32scene2Code.GDKnightObjects1[i].getPointY("")) - 20, "easeOutQuart", 500, false);
}
}}

}


};gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDAdventureGirlObjects1Objects = Hashtable.newFrom({"AdventureGirl": gdjs.New_32scene2Code.GDAdventureGirlObjects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDBasketBall2Objects1Objects = Hashtable.newFrom({"BasketBall2": gdjs.New_32scene2Code.GDBasketBall2Objects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDDevoTheDevilObjects1Objects = Hashtable.newFrom({"DevoTheDevil": gdjs.New_32scene2Code.GDDevoTheDevilObjects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDBasketBall2Objects1Objects = Hashtable.newFrom({"BasketBall2": gdjs.New_32scene2Code.GDBasketBall2Objects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDKnightObjects1Objects = Hashtable.newFrom({"Knight": gdjs.New_32scene2Code.GDKnightObjects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDDevoTheDevilObjects1Objects = Hashtable.newFrom({"DevoTheDevil": gdjs.New_32scene2Code.GDDevoTheDevilObjects1});gdjs.New_32scene2Code.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.New_32scene2Code.GDDevoTheDevilObjects1, gdjs.New_32scene2Code.GDDevoTheDevilObjects2);

gdjs.copyArray(gdjs.New_32scene2Code.GDKnightObjects1, gdjs.New_32scene2Code.GDKnightObjects2);


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene2Code.GDDevoTheDevilObjects2.length;i<l;++i) {
    if ( gdjs.New_32scene2Code.GDDevoTheDevilObjects2[i].getX() > (( gdjs.New_32scene2Code.GDKnightObjects2.length === 0 ) ? 0 :gdjs.New_32scene2Code.GDKnightObjects2[0].getPointX("")) ) {
        gdjs.New_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene2Code.GDDevoTheDevilObjects2[k] = gdjs.New_32scene2Code.GDDevoTheDevilObjects2[i];
        ++k;
    }
}
gdjs.New_32scene2Code.GDDevoTheDevilObjects2.length = k;}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene2Code.GDKnightObjects2 */
{for(var i = 0, len = gdjs.New_32scene2Code.GDKnightObjects2.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDKnightObjects2[i].getBehavior("Tween").addObjectPositionTween("hitC", (gdjs.New_32scene2Code.GDKnightObjects2[i].getPointX("")) - 100, (gdjs.New_32scene2Code.GDKnightObjects2[i].getPointY("")) - 20, "easeOutQuart", 500, false);
}
}}

}


{

/* Reuse gdjs.New_32scene2Code.GDDevoTheDevilObjects1 */
/* Reuse gdjs.New_32scene2Code.GDKnightObjects1 */

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene2Code.GDDevoTheDevilObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene2Code.GDDevoTheDevilObjects1[i].getX() < (( gdjs.New_32scene2Code.GDKnightObjects1.length === 0 ) ? 0 :gdjs.New_32scene2Code.GDKnightObjects1[0].getPointX("")) ) {
        gdjs.New_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene2Code.GDDevoTheDevilObjects1[k] = gdjs.New_32scene2Code.GDDevoTheDevilObjects1[i];
        ++k;
    }
}
gdjs.New_32scene2Code.GDDevoTheDevilObjects1.length = k;}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene2Code.GDKnightObjects1 */
{for(var i = 0, len = gdjs.New_32scene2Code.GDKnightObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDKnightObjects1[i].getBehavior("Tween").addObjectPositionTween("hitC", (gdjs.New_32scene2Code.GDKnightObjects1[i].getPointX("")) + 100, (gdjs.New_32scene2Code.GDKnightObjects1[i].getPointY("")) - 20, "easeOutQuart", 500, false);
}
}}

}


};gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDKnightObjects1Objects = Hashtable.newFrom({"Knight": gdjs.New_32scene2Code.GDKnightObjects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.New_32scene2Code.GDDoorObjects1});gdjs.New_32scene2Code.eventsList6 = function(runtimeScene) {

{

/* Reuse gdjs.New_32scene2Code.GDDoorObjects1 */

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene2Code.GDDoorObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene2Code.GDDoorObjects1[i].hasAnimationEnded() ) {
        gdjs.New_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene2Code.GDDoorObjects1[k] = gdjs.New_32scene2Code.GDDoorObjects1[i];
        ++k;
    }
}
gdjs.New_32scene2Code.GDDoorObjects1.length = k;}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene3", false);
}}

}


};gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNinjaGirlObjects1Objects = Hashtable.newFrom({"NinjaGirl": gdjs.New_32scene2Code.GDNinjaGirlObjects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDBasketBall2Objects1Objects = Hashtable.newFrom({"BasketBall2": gdjs.New_32scene2Code.GDBasketBall2Objects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDKnightObjects1Objects = Hashtable.newFrom({"Knight": gdjs.New_32scene2Code.GDKnightObjects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNinjaGirlObjects1Objects = Hashtable.newFrom({"NinjaGirl": gdjs.New_32scene2Code.GDNinjaGirlObjects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNinjaGirlObjects1Objects = Hashtable.newFrom({"NinjaGirl": gdjs.New_32scene2Code.GDNinjaGirlObjects1});gdjs.New_32scene2Code.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.New_32scene2Code.GDKnightObjects1, gdjs.New_32scene2Code.GDKnightObjects2);

gdjs.copyArray(gdjs.New_32scene2Code.GDNinjaGirlObjects1, gdjs.New_32scene2Code.GDNinjaGirlObjects2);


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene2Code.GDNinjaGirlObjects2.length;i<l;++i) {
    if ( gdjs.New_32scene2Code.GDNinjaGirlObjects2[i].getX() > (( gdjs.New_32scene2Code.GDKnightObjects2.length === 0 ) ? 0 :gdjs.New_32scene2Code.GDKnightObjects2[0].getPointX("")) ) {
        gdjs.New_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene2Code.GDNinjaGirlObjects2[k] = gdjs.New_32scene2Code.GDNinjaGirlObjects2[i];
        ++k;
    }
}
gdjs.New_32scene2Code.GDNinjaGirlObjects2.length = k;}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene2Code.GDKnightObjects2 */
{for(var i = 0, len = gdjs.New_32scene2Code.GDKnightObjects2.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDKnightObjects2[i].getBehavior("Tween").addObjectPositionTween("hitC", (gdjs.New_32scene2Code.GDKnightObjects2[i].getPointX("")) - 100, (gdjs.New_32scene2Code.GDKnightObjects2[i].getPointY("")) - 20, "easeOutQuart", 500, false);
}
}}

}


{

/* Reuse gdjs.New_32scene2Code.GDKnightObjects1 */
/* Reuse gdjs.New_32scene2Code.GDNinjaGirlObjects1 */

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene2Code.GDNinjaGirlObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene2Code.GDNinjaGirlObjects1[i].getX() < (( gdjs.New_32scene2Code.GDKnightObjects1.length === 0 ) ? 0 :gdjs.New_32scene2Code.GDKnightObjects1[0].getPointX("")) ) {
        gdjs.New_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene2Code.GDNinjaGirlObjects1[k] = gdjs.New_32scene2Code.GDNinjaGirlObjects1[i];
        ++k;
    }
}
gdjs.New_32scene2Code.GDNinjaGirlObjects1.length = k;}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene2Code.GDKnightObjects1 */
{for(var i = 0, len = gdjs.New_32scene2Code.GDKnightObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDKnightObjects1[i].getBehavior("Tween").addObjectPositionTween("hitC", (gdjs.New_32scene2Code.GDKnightObjects1[i].getPointX("")) + 100, (gdjs.New_32scene2Code.GDKnightObjects1[i].getPointY("")) - 20, "easeOutQuart", 500, false);
}
}}

}


};gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDKnightObjects1Objects = Hashtable.newFrom({"Knight": gdjs.New_32scene2Code.GDKnightObjects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDBronzeBoltObjects1Objects = Hashtable.newFrom({"BronzeBolt": gdjs.New_32scene2Code.GDBronzeBoltObjects1});gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDBronzeBoltObjects1Objects = Hashtable.newFrom({"BronzeBolt": gdjs.New_32scene2Code.GDBronzeBoltObjects1});gdjs.New_32scene2Code.eventsList8 = function(runtimeScene) {

{

/* Reuse gdjs.New_32scene2Code.GDNinjaGirlObjects1 */

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene2Code.GDNinjaGirlObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene2Code.GDNinjaGirlObjects1[i].hasAnimationEnded() ) {
        gdjs.New_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene2Code.GDNinjaGirlObjects1[k] = gdjs.New_32scene2Code.GDNinjaGirlObjects1[i];
        ++k;
    }
}
gdjs.New_32scene2Code.GDNinjaGirlObjects1.length = k;}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Knight"), gdjs.New_32scene2Code.GDKnightObjects1);
/* Reuse gdjs.New_32scene2Code.GDNinjaGirlObjects1 */
gdjs.New_32scene2Code.GDBronzeBoltObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDBronzeBoltObjects1Objects, (( gdjs.New_32scene2Code.GDNinjaGirlObjects1.length === 0 ) ? 0 :gdjs.New_32scene2Code.GDNinjaGirlObjects1[0].getPointX("puntobalae")), (( gdjs.New_32scene2Code.GDNinjaGirlObjects1.length === 0 ) ? 0 :gdjs.New_32scene2Code.GDNinjaGirlObjects1[0].getPointY("puntobalae")), "");
}{for(var i = 0, len = gdjs.New_32scene2Code.GDNinjaGirlObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDNinjaGirlObjects1[i].resetTimer("Dispara");
}
}{for(var i = 0, len = gdjs.New_32scene2Code.GDBronzeBoltObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDBronzeBoltObjects1[i].addForceTowardObject((gdjs.New_32scene2Code.GDKnightObjects1.length !== 0 ? gdjs.New_32scene2Code.GDKnightObjects1[0] : null), 300, 1);
}
}}

}


};gdjs.New_32scene2Code.eventsList9 = function(runtimeScene) {

{


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "y2mate.com - twenty one pilots  Level of Concern  Español.mp3", true, 15, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Knight"), gdjs.New_32scene2Code.GDKnightObjects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene2Code.GDKnightObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene2Code.GDKnightObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.New_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene2Code.GDKnightObjects1[k] = gdjs.New_32scene2Code.GDKnightObjects1[i];
        ++k;
    }
}
gdjs.New_32scene2Code.GDKnightObjects1.length = k;}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene2Code.GDKnightObjects1 */
{for(var i = 0, len = gdjs.New_32scene2Code.GDKnightObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDKnightObjects1[i].setAnimationName("Jump");
}
}
{ //Subevents
gdjs.New_32scene2Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Knight"), gdjs.New_32scene2Code.GDKnightObjects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene2Code.GDKnightObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene2Code.GDKnightObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.New_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene2Code.GDKnightObjects1[k] = gdjs.New_32scene2Code.GDKnightObjects1[i];
        ++k;
    }
}
gdjs.New_32scene2Code.GDKnightObjects1.length = k;}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.New_32scene2Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "b");
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BasketBall2"), gdjs.New_32scene2Code.GDBasketBall2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Knight"), gdjs.New_32scene2Code.GDKnightObjects1);
{for(var i = 0, len = gdjs.New_32scene2Code.GDKnightObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDKnightObjects1[i].getBehavior("FireBullet").Fire((gdjs.New_32scene2Code.GDKnightObjects1[i].getPointX("bala")), (gdjs.New_32scene2Code.GDKnightObjects1[i].getPointY("bala")), gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDBasketBall2Objects1Objects, 0, 400, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Knight"), gdjs.New_32scene2Code.GDKnightObjects1);
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.New_32scene2Code.GDscoreObjects1);
{gdjs.evtTools.camera.centerCameraWithinLimits(runtimeScene, (gdjs.New_32scene2Code.GDKnightObjects1.length !== 0 ? gdjs.New_32scene2Code.GDKnightObjects1[0] : null), 0, 0, 3885, 600, true, "", 0);
}{for(var i = 0, len = gdjs.New_32scene2Code.GDscoreObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDscoreObjects1[i].setString("Score: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.New_32scene2Code.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Knight"), gdjs.New_32scene2Code.GDKnightObjects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDKnightObjects1Objects, gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDCoinObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene2Code.GDCoinObjects1 */
{for(var i = 0, len = gdjs.New_32scene2Code.GDCoinObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(50);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Simple Coin 004.wav", false, 30, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FlatBoy"), gdjs.New_32scene2Code.GDFlatBoyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Knight"), gdjs.New_32scene2Code.GDKnightObjects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDKnightObjects1Objects, gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDFlatBoyObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene2Code.GDFlatBoyObjects1 */
{for(var i = 0, len = gdjs.New_32scene2Code.GDFlatBoyObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDFlatBoyObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(100);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Simple Coin 004.wav", false, 30, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AdventureBoy"), gdjs.New_32scene2Code.GDAdventureBoyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Knight"), gdjs.New_32scene2Code.GDKnightObjects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
gdjs.New_32scene2Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDKnightObjects1Objects, gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDAdventureBoyObjects1Objects, false, runtimeScene, false);
}if ( gdjs.New_32scene2Code.condition0IsTrue_0.val ) {
{
{gdjs.New_32scene2Code.conditionTrue_1 = gdjs.New_32scene2Code.condition1IsTrue_0;
gdjs.New_32scene2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10155484);
}
}}
if (gdjs.New_32scene2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32scene2Code.GDKnightObjects1 */
{for(var i = 0, len = gdjs.New_32scene2Code.GDKnightObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDKnightObjects1[i].getBehavior("Health").Hit(2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.New_32scene2Code.GDKnightObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDKnightObjects1[i].getBehavior("Flash").Flash(0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.New_32scene2Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Knight"), gdjs.New_32scene2Code.GDKnightObjects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene2Code.GDKnightObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene2Code.GDKnightObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.New_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene2Code.GDKnightObjects1[k] = gdjs.New_32scene2Code.GDKnightObjects1[i];
        ++k;
    }
}
gdjs.New_32scene2Code.GDKnightObjects1.length = k;}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene2Code.GDKnightObjects1 */
{for(var i = 0, len = gdjs.New_32scene2Code.GDKnightObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDKnightObjects1[i].setAnimationName("Dead");
}
}
{ //Subevents
gdjs.New_32scene2Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("AdventureBoy"), gdjs.New_32scene2Code.GDAdventureBoyObjects1);
gdjs.copyArray(runtimeScene.getObjects("BasketBall2"), gdjs.New_32scene2Code.GDBasketBall2Objects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
gdjs.New_32scene2Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDAdventureBoyObjects1Objects, gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDBasketBall2Objects1Objects, false, runtimeScene, false);
}if ( gdjs.New_32scene2Code.condition0IsTrue_0.val ) {
{
{gdjs.New_32scene2Code.conditionTrue_1 = gdjs.New_32scene2Code.condition1IsTrue_0;
gdjs.New_32scene2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8275364);
}
}}
if (gdjs.New_32scene2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32scene2Code.GDAdventureBoyObjects1 */
/* Reuse gdjs.New_32scene2Code.GDBasketBall2Objects1 */
{for(var i = 0, len = gdjs.New_32scene2Code.GDAdventureBoyObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDAdventureBoyObjects1[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.New_32scene2Code.GDBasketBall2Objects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDBasketBall2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.New_32scene2Code.GDAdventureBoyObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDAdventureBoyObjects1[i].getBehavior("Flash").Flash(0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AdventureBoy"), gdjs.New_32scene2Code.GDAdventureBoyObjects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene2Code.GDAdventureBoyObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene2Code.GDAdventureBoyObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.New_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene2Code.GDAdventureBoyObjects1[k] = gdjs.New_32scene2Code.GDAdventureBoyObjects1[i];
        ++k;
    }
}
gdjs.New_32scene2Code.GDAdventureBoyObjects1.length = k;}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene2Code.GDAdventureBoyObjects1 */
{for(var i = 0, len = gdjs.New_32scene2Code.GDAdventureBoyObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDAdventureBoyObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.New_32scene2Code.GDAdventureBoyObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDAdventureBoyObjects1[i].setAnimationName("Dead");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AdventureGirl"), gdjs.New_32scene2Code.GDAdventureGirlObjects1);
gdjs.copyArray(runtimeScene.getObjects("Knight"), gdjs.New_32scene2Code.GDKnightObjects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
gdjs.New_32scene2Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDKnightObjects1Objects, gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDAdventureGirlObjects1Objects, false, runtimeScene, false);
}if ( gdjs.New_32scene2Code.condition0IsTrue_0.val ) {
{
{gdjs.New_32scene2Code.conditionTrue_1 = gdjs.New_32scene2Code.condition1IsTrue_0;
gdjs.New_32scene2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8278012);
}
}}
if (gdjs.New_32scene2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32scene2Code.GDKnightObjects1 */
{for(var i = 0, len = gdjs.New_32scene2Code.GDKnightObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDKnightObjects1[i].getBehavior("Health").Hit(3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.New_32scene2Code.GDKnightObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDKnightObjects1[i].getBehavior("Flash").Flash(0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.New_32scene2Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("AdventureGirl"), gdjs.New_32scene2Code.GDAdventureGirlObjects1);
gdjs.copyArray(runtimeScene.getObjects("BasketBall2"), gdjs.New_32scene2Code.GDBasketBall2Objects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDAdventureGirlObjects1Objects, gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDBasketBall2Objects1Objects, false, runtimeScene, false);
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene2Code.GDAdventureGirlObjects1 */
/* Reuse gdjs.New_32scene2Code.GDBasketBall2Objects1 */
{for(var i = 0, len = gdjs.New_32scene2Code.GDAdventureGirlObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDAdventureGirlObjects1[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.New_32scene2Code.GDBasketBall2Objects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDBasketBall2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.New_32scene2Code.GDAdventureGirlObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDAdventureGirlObjects1[i].getBehavior("Flash").Flash(0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AdventureGirl"), gdjs.New_32scene2Code.GDAdventureGirlObjects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene2Code.GDAdventureGirlObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene2Code.GDAdventureGirlObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.New_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene2Code.GDAdventureGirlObjects1[k] = gdjs.New_32scene2Code.GDAdventureGirlObjects1[i];
        ++k;
    }
}
gdjs.New_32scene2Code.GDAdventureGirlObjects1.length = k;}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene2Code.GDAdventureGirlObjects1 */
{for(var i = 0, len = gdjs.New_32scene2Code.GDAdventureGirlObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDAdventureGirlObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.New_32scene2Code.GDAdventureGirlObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDAdventureGirlObjects1[i].setAnimationName("Dead");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BasketBall2"), gdjs.New_32scene2Code.GDBasketBall2Objects1);
gdjs.copyArray(runtimeScene.getObjects("DevoTheDevil"), gdjs.New_32scene2Code.GDDevoTheDevilObjects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDDevoTheDevilObjects1Objects, gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDBasketBall2Objects1Objects, false, runtimeScene, false);
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene2Code.GDBasketBall2Objects1 */
/* Reuse gdjs.New_32scene2Code.GDDevoTheDevilObjects1 */
{for(var i = 0, len = gdjs.New_32scene2Code.GDDevoTheDevilObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDDevoTheDevilObjects1[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.New_32scene2Code.GDBasketBall2Objects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDBasketBall2Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DevoTheDevil"), gdjs.New_32scene2Code.GDDevoTheDevilObjects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene2Code.GDDevoTheDevilObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene2Code.GDDevoTheDevilObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.New_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene2Code.GDDevoTheDevilObjects1[k] = gdjs.New_32scene2Code.GDDevoTheDevilObjects1[i];
        ++k;
    }
}
gdjs.New_32scene2Code.GDDevoTheDevilObjects1.length = k;}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene2Code.GDDevoTheDevilObjects1 */
{for(var i = 0, len = gdjs.New_32scene2Code.GDDevoTheDevilObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDDevoTheDevilObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DevoTheDevil"), gdjs.New_32scene2Code.GDDevoTheDevilObjects1);
gdjs.copyArray(runtimeScene.getObjects("Knight"), gdjs.New_32scene2Code.GDKnightObjects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
gdjs.New_32scene2Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDKnightObjects1Objects, gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDDevoTheDevilObjects1Objects, false, runtimeScene, false);
}if ( gdjs.New_32scene2Code.condition0IsTrue_0.val ) {
{
{gdjs.New_32scene2Code.conditionTrue_1 = gdjs.New_32scene2Code.condition1IsTrue_0;
gdjs.New_32scene2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8284812);
}
}}
if (gdjs.New_32scene2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32scene2Code.GDKnightObjects1 */
{for(var i = 0, len = gdjs.New_32scene2Code.GDKnightObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDKnightObjects1[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.New_32scene2Code.GDKnightObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDKnightObjects1[i].getBehavior("Flash").Flash(0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.New_32scene2Code.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.New_32scene2Code.GDDoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Knight"), gdjs.New_32scene2Code.GDKnightObjects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDKnightObjects1Objects, gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDDoorObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene2Code.GDDoorObjects1 */
{for(var i = 0, len = gdjs.New_32scene2Code.GDDoorObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDDoorObjects1[i].setAnimationName("Opening");
}
}
{ //Subevents
gdjs.New_32scene2Code.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BasketBall2"), gdjs.New_32scene2Code.GDBasketBall2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NinjaGirl"), gdjs.New_32scene2Code.GDNinjaGirlObjects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
gdjs.New_32scene2Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNinjaGirlObjects1Objects, gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDBasketBall2Objects1Objects, false, runtimeScene, false);
}if ( gdjs.New_32scene2Code.condition0IsTrue_0.val ) {
{
{gdjs.New_32scene2Code.conditionTrue_1 = gdjs.New_32scene2Code.condition1IsTrue_0;
gdjs.New_32scene2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7224916);
}
}}
if (gdjs.New_32scene2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32scene2Code.GDBasketBall2Objects1 */
/* Reuse gdjs.New_32scene2Code.GDNinjaGirlObjects1 */
{for(var i = 0, len = gdjs.New_32scene2Code.GDNinjaGirlObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDNinjaGirlObjects1[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.New_32scene2Code.GDBasketBall2Objects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDBasketBall2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.New_32scene2Code.GDNinjaGirlObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDNinjaGirlObjects1[i].getBehavior("Flash").Flash(0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NinjaGirl"), gdjs.New_32scene2Code.GDNinjaGirlObjects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene2Code.GDNinjaGirlObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene2Code.GDNinjaGirlObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.New_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene2Code.GDNinjaGirlObjects1[k] = gdjs.New_32scene2Code.GDNinjaGirlObjects1[i];
        ++k;
    }
}
gdjs.New_32scene2Code.GDNinjaGirlObjects1.length = k;}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene2Code.GDNinjaGirlObjects1 */
{for(var i = 0, len = gdjs.New_32scene2Code.GDNinjaGirlObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDNinjaGirlObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Knight"), gdjs.New_32scene2Code.GDKnightObjects1);
gdjs.copyArray(runtimeScene.getObjects("NinjaGirl"), gdjs.New_32scene2Code.GDNinjaGirlObjects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
gdjs.New_32scene2Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDKnightObjects1Objects, gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNinjaGirlObjects1Objects, false, runtimeScene, false);
}if ( gdjs.New_32scene2Code.condition0IsTrue_0.val ) {
{
{gdjs.New_32scene2Code.conditionTrue_1 = gdjs.New_32scene2Code.condition1IsTrue_0;
gdjs.New_32scene2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9974676);
}
}}
if (gdjs.New_32scene2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32scene2Code.GDKnightObjects1 */
/* Reuse gdjs.New_32scene2Code.GDNinjaGirlObjects1 */
{for(var i = 0, len = gdjs.New_32scene2Code.GDKnightObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDKnightObjects1[i].getBehavior("Health").Hit(3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.New_32scene2Code.GDKnightObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDKnightObjects1[i].getBehavior("Flash").Flash(0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.New_32scene2Code.GDKnightObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDKnightObjects1[i].separateFromObjectsList(gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNinjaGirlObjects1Objects, false);
}
}
{ //Subevents
gdjs.New_32scene2Code.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BronzeBolt"), gdjs.New_32scene2Code.GDBronzeBoltObjects1);
gdjs.copyArray(runtimeScene.getObjects("Knight"), gdjs.New_32scene2Code.GDKnightObjects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
gdjs.New_32scene2Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDKnightObjects1Objects, gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDBronzeBoltObjects1Objects, false, runtimeScene, false);
}if ( gdjs.New_32scene2Code.condition0IsTrue_0.val ) {
{
{gdjs.New_32scene2Code.conditionTrue_1 = gdjs.New_32scene2Code.condition1IsTrue_0;
gdjs.New_32scene2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7380764);
}
}}
if (gdjs.New_32scene2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32scene2Code.GDKnightObjects1 */
{for(var i = 0, len = gdjs.New_32scene2Code.GDKnightObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDKnightObjects1[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.New_32scene2Code.GDKnightObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDKnightObjects1[i].getBehavior("Flash").Flash(0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NinjaGirl"), gdjs.New_32scene2Code.GDNinjaGirlObjects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene2Code.GDNinjaGirlObjects1.length;i<l;++i) {
    if ( gdjs.New_32scene2Code.GDNinjaGirlObjects1[i].timerElapsedTime("Dispara", 1) ) {
        gdjs.New_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene2Code.GDNinjaGirlObjects1[k] = gdjs.New_32scene2Code.GDNinjaGirlObjects1[i];
        ++k;
    }
}
gdjs.New_32scene2Code.GDNinjaGirlObjects1.length = k;}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene2Code.GDNinjaGirlObjects1 */
{for(var i = 0, len = gdjs.New_32scene2Code.GDNinjaGirlObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDNinjaGirlObjects1[i].setAnimationName("Attack");
}
}
{ //Subevents
gdjs.New_32scene2Code.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NinjaGirl"), gdjs.New_32scene2Code.GDNinjaGirlObjects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32scene2Code.GDNinjaGirlObjects1.length;i<l;++i) {
    if ( !(gdjs.New_32scene2Code.GDNinjaGirlObjects1[i].timerElapsedTime("Dispara", 1)) ) {
        gdjs.New_32scene2Code.condition0IsTrue_0.val = true;
        gdjs.New_32scene2Code.GDNinjaGirlObjects1[k] = gdjs.New_32scene2Code.GDNinjaGirlObjects1[i];
        ++k;
    }
}
gdjs.New_32scene2Code.GDNinjaGirlObjects1.length = k;}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene2Code.GDNinjaGirlObjects1 */
{for(var i = 0, len = gdjs.New_32scene2Code.GDNinjaGirlObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDNinjaGirlObjects1[i].setAnimationName("Idle");
}
}}

}


};

gdjs.New_32scene2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32scene2Code.GDBlueFloorObjects1.length = 0;
gdjs.New_32scene2Code.GDBlueFloorObjects2.length = 0;
gdjs.New_32scene2Code.GDBlueFloorObjects3.length = 0;
gdjs.New_32scene2Code.GDBluePlatformObjects1.length = 0;
gdjs.New_32scene2Code.GDBluePlatformObjects2.length = 0;
gdjs.New_32scene2Code.GDBluePlatformObjects3.length = 0;
gdjs.New_32scene2Code.GDKnightObjects1.length = 0;
gdjs.New_32scene2Code.GDKnightObjects2.length = 0;
gdjs.New_32scene2Code.GDKnightObjects3.length = 0;
gdjs.New_32scene2Code.GDAdventureBoyObjects1.length = 0;
gdjs.New_32scene2Code.GDAdventureBoyObjects2.length = 0;
gdjs.New_32scene2Code.GDAdventureBoyObjects3.length = 0;
gdjs.New_32scene2Code.GDBasketBall2Objects1.length = 0;
gdjs.New_32scene2Code.GDBasketBall2Objects2.length = 0;
gdjs.New_32scene2Code.GDBasketBall2Objects3.length = 0;
gdjs.New_32scene2Code.GDscoreObjects1.length = 0;
gdjs.New_32scene2Code.GDscoreObjects2.length = 0;
gdjs.New_32scene2Code.GDscoreObjects3.length = 0;
gdjs.New_32scene2Code.GDCoinObjects1.length = 0;
gdjs.New_32scene2Code.GDCoinObjects2.length = 0;
gdjs.New_32scene2Code.GDCoinObjects3.length = 0;
gdjs.New_32scene2Code.GDAdventureGirlObjects1.length = 0;
gdjs.New_32scene2Code.GDAdventureGirlObjects2.length = 0;
gdjs.New_32scene2Code.GDAdventureGirlObjects3.length = 0;
gdjs.New_32scene2Code.GDFlatBoyObjects1.length = 0;
gdjs.New_32scene2Code.GDFlatBoyObjects2.length = 0;
gdjs.New_32scene2Code.GDFlatBoyObjects3.length = 0;
gdjs.New_32scene2Code.GDDoorObjects1.length = 0;
gdjs.New_32scene2Code.GDDoorObjects2.length = 0;
gdjs.New_32scene2Code.GDDoorObjects3.length = 0;
gdjs.New_32scene2Code.GDDevoTheDevilObjects1.length = 0;
gdjs.New_32scene2Code.GDDevoTheDevilObjects2.length = 0;
gdjs.New_32scene2Code.GDDevoTheDevilObjects3.length = 0;
gdjs.New_32scene2Code.GDNewObjectObjects1.length = 0;
gdjs.New_32scene2Code.GDNewObjectObjects2.length = 0;
gdjs.New_32scene2Code.GDNewObjectObjects3.length = 0;
gdjs.New_32scene2Code.GDNewObject2Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject2Objects2.length = 0;
gdjs.New_32scene2Code.GDNewObject2Objects3.length = 0;
gdjs.New_32scene2Code.GDNewObject3Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject3Objects2.length = 0;
gdjs.New_32scene2Code.GDNewObject3Objects3.length = 0;
gdjs.New_32scene2Code.GDNewObject4Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject4Objects2.length = 0;
gdjs.New_32scene2Code.GDNewObject4Objects3.length = 0;
gdjs.New_32scene2Code.GDNinjaGirlObjects1.length = 0;
gdjs.New_32scene2Code.GDNinjaGirlObjects2.length = 0;
gdjs.New_32scene2Code.GDNinjaGirlObjects3.length = 0;
gdjs.New_32scene2Code.GDBronzeBoltObjects1.length = 0;
gdjs.New_32scene2Code.GDBronzeBoltObjects2.length = 0;
gdjs.New_32scene2Code.GDBronzeBoltObjects3.length = 0;

gdjs.New_32scene2Code.eventsList9(runtimeScene);
return;

}

gdjs['New_32scene2Code'] = gdjs.New_32scene2Code;
