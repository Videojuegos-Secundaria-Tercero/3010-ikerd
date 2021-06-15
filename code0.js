gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDBlueFloorObjects1= [];
gdjs.New_32sceneCode.GDBlueFloorObjects2= [];
gdjs.New_32sceneCode.GDBlueFloorObjects3= [];
gdjs.New_32sceneCode.GDBluePlatformObjects1= [];
gdjs.New_32sceneCode.GDBluePlatformObjects2= [];
gdjs.New_32sceneCode.GDBluePlatformObjects3= [];
gdjs.New_32sceneCode.GDKnightObjects1= [];
gdjs.New_32sceneCode.GDKnightObjects2= [];
gdjs.New_32sceneCode.GDKnightObjects3= [];
gdjs.New_32sceneCode.GDBasketBall2Objects1= [];
gdjs.New_32sceneCode.GDBasketBall2Objects2= [];
gdjs.New_32sceneCode.GDBasketBall2Objects3= [];
gdjs.New_32sceneCode.GDscoreObjects1= [];
gdjs.New_32sceneCode.GDscoreObjects2= [];
gdjs.New_32sceneCode.GDscoreObjects3= [];
gdjs.New_32sceneCode.GDCoinObjects1= [];
gdjs.New_32sceneCode.GDCoinObjects2= [];
gdjs.New_32sceneCode.GDCoinObjects3= [];
gdjs.New_32sceneCode.GDFlatBoyObjects1= [];
gdjs.New_32sceneCode.GDFlatBoyObjects2= [];
gdjs.New_32sceneCode.GDFlatBoyObjects3= [];
gdjs.New_32sceneCode.GDZombieGirlObjects1= [];
gdjs.New_32sceneCode.GDZombieGirlObjects2= [];
gdjs.New_32sceneCode.GDZombieGirlObjects3= [];
gdjs.New_32sceneCode.GDZombieBoyObjects1= [];
gdjs.New_32sceneCode.GDZombieBoyObjects2= [];
gdjs.New_32sceneCode.GDZombieBoyObjects3= [];
gdjs.New_32sceneCode.GDspritemio1Objects1= [];
gdjs.New_32sceneCode.GDspritemio1Objects2= [];
gdjs.New_32sceneCode.GDspritemio1Objects3= [];
gdjs.New_32sceneCode.GDDoorObjects1= [];
gdjs.New_32sceneCode.GDDoorObjects2= [];
gdjs.New_32sceneCode.GDDoorObjects3= [];
gdjs.New_32sceneCode.GDNewObjectObjects1= [];
gdjs.New_32sceneCode.GDNewObjectObjects2= [];
gdjs.New_32sceneCode.GDNewObjectObjects3= [];
gdjs.New_32sceneCode.GDNewObject2Objects1= [];
gdjs.New_32sceneCode.GDNewObject2Objects2= [];
gdjs.New_32sceneCode.GDNewObject2Objects3= [];
gdjs.New_32sceneCode.GDNewObject32Objects1= [];
gdjs.New_32sceneCode.GDNewObject32Objects2= [];
gdjs.New_32sceneCode.GDNewObject32Objects3= [];
gdjs.New_32sceneCode.GDNewObject3Objects1= [];
gdjs.New_32sceneCode.GDNewObject3Objects2= [];
gdjs.New_32sceneCode.GDNewObject3Objects3= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition3IsTrue_0 = {val:false};
gdjs.New_32sceneCode.conditionTrue_1 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition3IsTrue_1 = {val:false};


gdjs.New_32sceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition0IsTrue_0;
gdjs.New_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9961452);
}
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Simple Jump 004.wav", false, 50, 1);
}}

}


};gdjs.New_32sceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.New_32sceneCode.GDKnightObjects1, gdjs.New_32sceneCode.GDKnightObjects2);


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDKnightObjects2.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDKnightObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDKnightObjects2[k] = gdjs.New_32sceneCode.GDKnightObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDKnightObjects2.length = k;}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition1IsTrue_0;
gdjs.New_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9962964);
}
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDKnightObjects2 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDKnightObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDKnightObjects2[i].setAnimationName("Walk");
}
}}

}


{

/* Reuse gdjs.New_32sceneCode.GDKnightObjects1 */

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
gdjs.New_32sceneCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDKnightObjects1.length;i<l;++i) {
    if ( !(gdjs.New_32sceneCode.GDKnightObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDKnightObjects1[k] = gdjs.New_32sceneCode.GDKnightObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDKnightObjects1.length = k;}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "b"));
}if ( gdjs.New_32sceneCode.condition1IsTrue_0.val ) {
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition2IsTrue_0;
gdjs.New_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9963940);
}
}}
}
if (gdjs.New_32sceneCode.condition2IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDKnightObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDKnightObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDKnightObjects1[i].setAnimationName("Idle");
}
}}

}


};gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDBasketBall2Objects1Objects = Hashtable.newFrom({"BasketBall2": gdjs.New_32sceneCode.GDBasketBall2Objects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDKnightObjects1Objects = Hashtable.newFrom({"Knight": gdjs.New_32sceneCode.GDKnightObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.New_32sceneCode.GDCoinObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDKnightObjects1Objects = Hashtable.newFrom({"Knight": gdjs.New_32sceneCode.GDKnightObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDFlatBoyObjects1Objects = Hashtable.newFrom({"FlatBoy": gdjs.New_32sceneCode.GDFlatBoyObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDKnightObjects1Objects = Hashtable.newFrom({"Knight": gdjs.New_32sceneCode.GDKnightObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDZombieGirlObjects1Objects = Hashtable.newFrom({"ZombieGirl": gdjs.New_32sceneCode.GDZombieGirlObjects1});gdjs.New_32sceneCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.New_32sceneCode.GDKnightObjects1, gdjs.New_32sceneCode.GDKnightObjects2);

gdjs.copyArray(gdjs.New_32sceneCode.GDZombieGirlObjects1, gdjs.New_32sceneCode.GDZombieGirlObjects2);


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDZombieGirlObjects2.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDZombieGirlObjects2[i].getX() > (( gdjs.New_32sceneCode.GDKnightObjects2.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDKnightObjects2[0].getPointX("")) ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDZombieGirlObjects2[k] = gdjs.New_32sceneCode.GDZombieGirlObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDZombieGirlObjects2.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDKnightObjects2 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDKnightObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDKnightObjects2[i].getBehavior("Tween").addObjectPositionTween("hitC", (gdjs.New_32sceneCode.GDKnightObjects2[i].getPointX("")) - 100, (gdjs.New_32sceneCode.GDKnightObjects2[i].getPointY("")) - 20, "easeOutQuart", 500, false);
}
}}

}


{

/* Reuse gdjs.New_32sceneCode.GDKnightObjects1 */
/* Reuse gdjs.New_32sceneCode.GDZombieGirlObjects1 */

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDZombieGirlObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDZombieGirlObjects1[i].getX() < (( gdjs.New_32sceneCode.GDKnightObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDKnightObjects1[0].getPointX("")) ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDZombieGirlObjects1[k] = gdjs.New_32sceneCode.GDZombieGirlObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDZombieGirlObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDKnightObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDKnightObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDKnightObjects1[i].getBehavior("Tween").addObjectPositionTween("hitC", (gdjs.New_32sceneCode.GDKnightObjects1[i].getPointX("")) + 100, (gdjs.New_32sceneCode.GDKnightObjects1[i].getPointY("")) - 20, "easeOutQuart", 500, false);
}
}}

}


};gdjs.New_32sceneCode.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs.New_32sceneCode.GDKnightObjects1 */

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDKnightObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDKnightObjects1[i].hasAnimationEnded() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDKnightObjects1[k] = gdjs.New_32sceneCode.GDKnightObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDKnightObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


};gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDZombieGirlObjects1Objects = Hashtable.newFrom({"ZombieGirl": gdjs.New_32sceneCode.GDZombieGirlObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDBasketBall2Objects1Objects = Hashtable.newFrom({"BasketBall2": gdjs.New_32sceneCode.GDBasketBall2Objects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDKnightObjects1Objects = Hashtable.newFrom({"Knight": gdjs.New_32sceneCode.GDKnightObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDZombieBoyObjects1Objects = Hashtable.newFrom({"ZombieBoy": gdjs.New_32sceneCode.GDZombieBoyObjects1});gdjs.New_32sceneCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.New_32sceneCode.GDKnightObjects1, gdjs.New_32sceneCode.GDKnightObjects2);

gdjs.copyArray(gdjs.New_32sceneCode.GDZombieBoyObjects1, gdjs.New_32sceneCode.GDZombieBoyObjects2);


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDZombieBoyObjects2.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDZombieBoyObjects2[i].getX() > (( gdjs.New_32sceneCode.GDKnightObjects2.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDKnightObjects2[0].getPointX("")) ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDZombieBoyObjects2[k] = gdjs.New_32sceneCode.GDZombieBoyObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDZombieBoyObjects2.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDKnightObjects2 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDKnightObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDKnightObjects2[i].getBehavior("Tween").addObjectPositionTween("hitC", (gdjs.New_32sceneCode.GDKnightObjects2[i].getPointX("")) - 100, (gdjs.New_32sceneCode.GDKnightObjects2[i].getPointY("")) - 20, "easeOutQuart", 500, false);
}
}}

}


{

/* Reuse gdjs.New_32sceneCode.GDKnightObjects1 */
/* Reuse gdjs.New_32sceneCode.GDZombieBoyObjects1 */

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDZombieBoyObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDZombieBoyObjects1[i].getX() < (( gdjs.New_32sceneCode.GDKnightObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDKnightObjects1[0].getPointX("")) ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDZombieBoyObjects1[k] = gdjs.New_32sceneCode.GDZombieBoyObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDZombieBoyObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDKnightObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDKnightObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDKnightObjects1[i].getBehavior("Tween").addObjectPositionTween("hitC", (gdjs.New_32sceneCode.GDKnightObjects1[i].getPointX("")) + 100, (gdjs.New_32sceneCode.GDKnightObjects1[i].getPointY("")) - 20, "easeOutQuart", 500, false);
}
}}

}


};gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDZombieBoyObjects1Objects = Hashtable.newFrom({"ZombieBoy": gdjs.New_32sceneCode.GDZombieBoyObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDBasketBall2Objects1Objects = Hashtable.newFrom({"BasketBall2": gdjs.New_32sceneCode.GDBasketBall2Objects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDspritemio1Objects1Objects = Hashtable.newFrom({"spritemio1": gdjs.New_32sceneCode.GDspritemio1Objects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDBasketBall2Objects1Objects = Hashtable.newFrom({"BasketBall2": gdjs.New_32sceneCode.GDBasketBall2Objects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDKnightObjects1Objects = Hashtable.newFrom({"Knight": gdjs.New_32sceneCode.GDKnightObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDspritemio1Objects1Objects = Hashtable.newFrom({"spritemio1": gdjs.New_32sceneCode.GDspritemio1Objects1});gdjs.New_32sceneCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.New_32sceneCode.GDKnightObjects1, gdjs.New_32sceneCode.GDKnightObjects2);

gdjs.copyArray(gdjs.New_32sceneCode.GDspritemio1Objects1, gdjs.New_32sceneCode.GDspritemio1Objects2);


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDspritemio1Objects2.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDspritemio1Objects2[i].getX() > (( gdjs.New_32sceneCode.GDKnightObjects2.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDKnightObjects2[0].getPointX("")) ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDspritemio1Objects2[k] = gdjs.New_32sceneCode.GDspritemio1Objects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDspritemio1Objects2.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDKnightObjects2 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDKnightObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDKnightObjects2[i].getBehavior("Tween").addObjectPositionTween("hitC", (gdjs.New_32sceneCode.GDKnightObjects2[i].getPointX("")) - 100, (gdjs.New_32sceneCode.GDKnightObjects2[i].getPointY("")) - 20, "easeOutQuart", 500, false);
}
}}

}


{

/* Reuse gdjs.New_32sceneCode.GDKnightObjects1 */
/* Reuse gdjs.New_32sceneCode.GDspritemio1Objects1 */

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDspritemio1Objects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDspritemio1Objects1[i].getX() < (( gdjs.New_32sceneCode.GDKnightObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDKnightObjects1[0].getPointX("")) ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDspritemio1Objects1[k] = gdjs.New_32sceneCode.GDspritemio1Objects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDspritemio1Objects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDKnightObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDKnightObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDKnightObjects1[i].getBehavior("Tween").addObjectPositionTween("hitC", (gdjs.New_32sceneCode.GDKnightObjects1[i].getPointX("")) + 100, (gdjs.New_32sceneCode.GDKnightObjects1[i].getPointY("")) - 20, "easeOutQuart", 500, false);
}
}}

}


};gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDKnightObjects1Objects = Hashtable.newFrom({"Knight": gdjs.New_32sceneCode.GDKnightObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.New_32sceneCode.GDDoorObjects1});gdjs.New_32sceneCode.eventsList6 = function(runtimeScene) {

{

/* Reuse gdjs.New_32sceneCode.GDDoorObjects1 */

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDDoorObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDDoorObjects1[i].hasAnimationEnded() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDDoorObjects1[k] = gdjs.New_32sceneCode.GDDoorObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDDoorObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene2", false);
}}

}


};gdjs.New_32sceneCode.eventsList7 = function(runtimeScene) {

{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "y2mate.com - Twenty One Pilots  Tear In My Heart  Sub Español.mp3", true, 15, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Knight"), gdjs.New_32sceneCode.GDKnightObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDKnightObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDKnightObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDKnightObjects1[k] = gdjs.New_32sceneCode.GDKnightObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDKnightObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDKnightObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDKnightObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDKnightObjects1[i].setAnimationName("Jump");
}
}
{ //Subevents
gdjs.New_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Knight"), gdjs.New_32sceneCode.GDKnightObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDKnightObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDKnightObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDKnightObjects1[k] = gdjs.New_32sceneCode.GDKnightObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDKnightObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.New_32sceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "b");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BasketBall2"), gdjs.New_32sceneCode.GDBasketBall2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Knight"), gdjs.New_32sceneCode.GDKnightObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDKnightObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDKnightObjects1[i].getBehavior("FireBullet").Fire((gdjs.New_32sceneCode.GDKnightObjects1[i].getPointX("bala")), (gdjs.New_32sceneCode.GDKnightObjects1[i].getPointY("bala")), gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDBasketBall2Objects1Objects, 0, 400, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Knight"), gdjs.New_32sceneCode.GDKnightObjects1);
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.New_32sceneCode.GDscoreObjects1);
{gdjs.evtTools.camera.centerCameraWithinLimits(runtimeScene, (gdjs.New_32sceneCode.GDKnightObjects1.length !== 0 ? gdjs.New_32sceneCode.GDKnightObjects1[0] : null), 0, 0, 3885, 600, true, "", 0);
}{for(var i = 0, len = gdjs.New_32sceneCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDscoreObjects1[i].setString("Score: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.New_32sceneCode.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Knight"), gdjs.New_32sceneCode.GDKnightObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDKnightObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDCoinObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDCoinObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(50);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Simple Coin 004.wav", false, 30, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FlatBoy"), gdjs.New_32sceneCode.GDFlatBoyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Knight"), gdjs.New_32sceneCode.GDKnightObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDKnightObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDFlatBoyObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDFlatBoyObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDFlatBoyObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDFlatBoyObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(100);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Simple Coin 004.wav", false, 30, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Knight"), gdjs.New_32sceneCode.GDKnightObjects1);
gdjs.copyArray(runtimeScene.getObjects("ZombieGirl"), gdjs.New_32sceneCode.GDZombieGirlObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDKnightObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDZombieGirlObjects1Objects, false, runtimeScene, false);
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition1IsTrue_0;
gdjs.New_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9968588);
}
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDKnightObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDKnightObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDKnightObjects1[i].getBehavior("Health").Hit(2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDKnightObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDKnightObjects1[i].getBehavior("Flash").Flash(0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.New_32sceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Knight"), gdjs.New_32sceneCode.GDKnightObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDKnightObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDKnightObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDKnightObjects1[k] = gdjs.New_32sceneCode.GDKnightObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDKnightObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDKnightObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDKnightObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDKnightObjects1[i].setAnimationName("Dead");
}
}
{ //Subevents
gdjs.New_32sceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BasketBall2"), gdjs.New_32sceneCode.GDBasketBall2Objects1);
gdjs.copyArray(runtimeScene.getObjects("ZombieGirl"), gdjs.New_32sceneCode.GDZombieGirlObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDZombieGirlObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDBasketBall2Objects1Objects, false, runtimeScene, false);
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition1IsTrue_0;
gdjs.New_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9965476);
}
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDBasketBall2Objects1 */
/* Reuse gdjs.New_32sceneCode.GDZombieGirlObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDZombieGirlObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDZombieGirlObjects1[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDBasketBall2Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDBasketBall2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDZombieGirlObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDZombieGirlObjects1[i].getBehavior("Flash").Flash(0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ZombieGirl"), gdjs.New_32sceneCode.GDZombieGirlObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDZombieGirlObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDZombieGirlObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDZombieGirlObjects1[k] = gdjs.New_32sceneCode.GDZombieGirlObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDZombieGirlObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDZombieGirlObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDZombieGirlObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDZombieGirlObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDZombieGirlObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDZombieGirlObjects1[i].setAnimationName("Dead");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Knight"), gdjs.New_32sceneCode.GDKnightObjects1);
gdjs.copyArray(runtimeScene.getObjects("ZombieBoy"), gdjs.New_32sceneCode.GDZombieBoyObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDKnightObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDZombieBoyObjects1Objects, false, runtimeScene, false);
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition1IsTrue_0;
gdjs.New_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9974596);
}
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDKnightObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDKnightObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDKnightObjects1[i].getBehavior("Health").Hit(3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDKnightObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDKnightObjects1[i].getBehavior("Flash").Flash(0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.New_32sceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BasketBall2"), gdjs.New_32sceneCode.GDBasketBall2Objects1);
gdjs.copyArray(runtimeScene.getObjects("ZombieBoy"), gdjs.New_32sceneCode.GDZombieBoyObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDZombieBoyObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDBasketBall2Objects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDBasketBall2Objects1 */
/* Reuse gdjs.New_32sceneCode.GDZombieBoyObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDZombieBoyObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDZombieBoyObjects1[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDBasketBall2Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDBasketBall2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDZombieBoyObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDZombieBoyObjects1[i].getBehavior("Flash").Flash(0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ZombieBoy"), gdjs.New_32sceneCode.GDZombieBoyObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDZombieBoyObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDZombieBoyObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDZombieBoyObjects1[k] = gdjs.New_32sceneCode.GDZombieBoyObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDZombieBoyObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDZombieBoyObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDZombieBoyObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDZombieBoyObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDZombieBoyObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDZombieBoyObjects1[i].setAnimationName("Dead");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BasketBall2"), gdjs.New_32sceneCode.GDBasketBall2Objects1);
gdjs.copyArray(runtimeScene.getObjects("spritemio1"), gdjs.New_32sceneCode.GDspritemio1Objects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDspritemio1Objects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDBasketBall2Objects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDBasketBall2Objects1 */
/* Reuse gdjs.New_32sceneCode.GDspritemio1Objects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDspritemio1Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDspritemio1Objects1[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDBasketBall2Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDBasketBall2Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("spritemio1"), gdjs.New_32sceneCode.GDspritemio1Objects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDspritemio1Objects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDspritemio1Objects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDspritemio1Objects1[k] = gdjs.New_32sceneCode.GDspritemio1Objects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDspritemio1Objects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDspritemio1Objects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDspritemio1Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDspritemio1Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Knight"), gdjs.New_32sceneCode.GDKnightObjects1);
gdjs.copyArray(runtimeScene.getObjects("spritemio1"), gdjs.New_32sceneCode.GDspritemio1Objects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDKnightObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDspritemio1Objects1Objects, false, runtimeScene, false);
}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition1IsTrue_0;
gdjs.New_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9980796);
}
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDKnightObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDKnightObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDKnightObjects1[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDKnightObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDKnightObjects1[i].getBehavior("Flash").Flash(0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.New_32sceneCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.New_32sceneCode.GDDoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Knight"), gdjs.New_32sceneCode.GDKnightObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDKnightObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDDoorObjects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDDoorObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDDoorObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDDoorObjects1[i].setAnimationName("Opening");
}
}
{ //Subevents
gdjs.New_32sceneCode.eventsList6(runtimeScene);} //End of subevents
}

}


};

gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDBlueFloorObjects1.length = 0;
gdjs.New_32sceneCode.GDBlueFloorObjects2.length = 0;
gdjs.New_32sceneCode.GDBlueFloorObjects3.length = 0;
gdjs.New_32sceneCode.GDBluePlatformObjects1.length = 0;
gdjs.New_32sceneCode.GDBluePlatformObjects2.length = 0;
gdjs.New_32sceneCode.GDBluePlatformObjects3.length = 0;
gdjs.New_32sceneCode.GDKnightObjects1.length = 0;
gdjs.New_32sceneCode.GDKnightObjects2.length = 0;
gdjs.New_32sceneCode.GDKnightObjects3.length = 0;
gdjs.New_32sceneCode.GDBasketBall2Objects1.length = 0;
gdjs.New_32sceneCode.GDBasketBall2Objects2.length = 0;
gdjs.New_32sceneCode.GDBasketBall2Objects3.length = 0;
gdjs.New_32sceneCode.GDscoreObjects1.length = 0;
gdjs.New_32sceneCode.GDscoreObjects2.length = 0;
gdjs.New_32sceneCode.GDscoreObjects3.length = 0;
gdjs.New_32sceneCode.GDCoinObjects1.length = 0;
gdjs.New_32sceneCode.GDCoinObjects2.length = 0;
gdjs.New_32sceneCode.GDCoinObjects3.length = 0;
gdjs.New_32sceneCode.GDFlatBoyObjects1.length = 0;
gdjs.New_32sceneCode.GDFlatBoyObjects2.length = 0;
gdjs.New_32sceneCode.GDFlatBoyObjects3.length = 0;
gdjs.New_32sceneCode.GDZombieGirlObjects1.length = 0;
gdjs.New_32sceneCode.GDZombieGirlObjects2.length = 0;
gdjs.New_32sceneCode.GDZombieGirlObjects3.length = 0;
gdjs.New_32sceneCode.GDZombieBoyObjects1.length = 0;
gdjs.New_32sceneCode.GDZombieBoyObjects2.length = 0;
gdjs.New_32sceneCode.GDZombieBoyObjects3.length = 0;
gdjs.New_32sceneCode.GDspritemio1Objects1.length = 0;
gdjs.New_32sceneCode.GDspritemio1Objects2.length = 0;
gdjs.New_32sceneCode.GDspritemio1Objects3.length = 0;
gdjs.New_32sceneCode.GDDoorObjects1.length = 0;
gdjs.New_32sceneCode.GDDoorObjects2.length = 0;
gdjs.New_32sceneCode.GDDoorObjects3.length = 0;
gdjs.New_32sceneCode.GDNewObjectObjects1.length = 0;
gdjs.New_32sceneCode.GDNewObjectObjects2.length = 0;
gdjs.New_32sceneCode.GDNewObjectObjects3.length = 0;
gdjs.New_32sceneCode.GDNewObject2Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject2Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject2Objects3.length = 0;
gdjs.New_32sceneCode.GDNewObject32Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject32Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject32Objects3.length = 0;
gdjs.New_32sceneCode.GDNewObject3Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject3Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject3Objects3.length = 0;

gdjs.New_32sceneCode.eventsList7(runtimeScene);
return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
