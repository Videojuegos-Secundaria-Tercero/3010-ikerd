gdjs.New_32scene3Code = {};
gdjs.New_32scene3Code.GDNewObjectObjects1= [];
gdjs.New_32scene3Code.GDNewObjectObjects2= [];
gdjs.New_32scene3Code.GDNewObject2Objects1= [];
gdjs.New_32scene3Code.GDNewObject2Objects2= [];
gdjs.New_32scene3Code.GDNewObject3Objects1= [];
gdjs.New_32scene3Code.GDNewObject3Objects2= [];

gdjs.New_32scene3Code.conditionTrue_0 = {val:false};
gdjs.New_32scene3Code.condition0IsTrue_0 = {val:false};
gdjs.New_32scene3Code.condition1IsTrue_0 = {val:false};
gdjs.New_32scene3Code.condition2IsTrue_0 = {val:false};


gdjs.New_32scene3Code.mapOfGDgdjs_46New_9532scene3Code_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.New_32scene3Code.GDNewObject3Objects1});gdjs.New_32scene3Code.eventsList0 = function(runtimeScene) {

{


gdjs.New_32scene3Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32scene3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "y2mate.com - Twenty One Pilots  Shy Away Official Video.mp3", true, 25, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.New_32scene3Code.GDNewObject3Objects1);

gdjs.New_32scene3Code.condition0IsTrue_0.val = false;
gdjs.New_32scene3Code.condition1IsTrue_0.val = false;
{
gdjs.New_32scene3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.New_32scene3Code.condition0IsTrue_0.val ) {
{
gdjs.New_32scene3Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32scene3Code.mapOfGDgdjs_46New_9532scene3Code_46GDNewObject3Objects1Objects, runtimeScene, true, false);
}}
if (gdjs.New_32scene3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


};

gdjs.New_32scene3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32scene3Code.GDNewObjectObjects1.length = 0;
gdjs.New_32scene3Code.GDNewObjectObjects2.length = 0;
gdjs.New_32scene3Code.GDNewObject2Objects1.length = 0;
gdjs.New_32scene3Code.GDNewObject2Objects2.length = 0;
gdjs.New_32scene3Code.GDNewObject3Objects1.length = 0;
gdjs.New_32scene3Code.GDNewObject3Objects2.length = 0;

gdjs.New_32scene3Code.eventsList0(runtimeScene);
return;

}

gdjs['New_32scene3Code'] = gdjs.New_32scene3Code;
