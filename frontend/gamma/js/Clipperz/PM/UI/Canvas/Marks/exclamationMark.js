/*

Copyright 2008-2011 Clipperz Srl

This file is part of Clipperz Community Edition.
Clipperz Community Edition is an online password manager.
For further information about its features and functionalities please
refer to http://www.clipperz.com.

* Clipperz Community Edition is free software: you can redistribute
  it and/or modify it under the terms of the GNU Affero General Public
  License as published by the Free Software Foundation, either version
  3 of the License, or (at your option) any later version.

* Clipperz Community Edition is distributed in the hope that it will
  be useful, but WITHOUT ANY WARRANTY; without even the implied
  warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
  See the GNU Affero General Public License for more details.

* You should have received a copy of the GNU Affero General Public
  License along with Clipperz Community Edition.  If not, see
  <http://www.gnu.org/licenses/>.

*/

//
//	exclamationMark.js
//	!
//
//	Created by Giulio Cesare Solaroli on 3/7/10
//	Copyright 2010 Clipperz
//	This code was generated by Opacity. You may use or modify it in any way.
//

var kClipperz_PM_UI_Canvas_Marks_exclamationMarkWidth = 50.0;
var kClipperz_PM_UI_Canvas_Marks_exclamationMarkHeight = 50.0;

function Clipperz_PM_UI_Canvas_Marks_exclamationMark(canvas, aColor)
{
	var context = canvas.getContext("2d");
	var alignStroke;
	var resolution;
	var path;
	var pointX;
	var pointY;
	var controlPoint1X;
	var controlPoint1Y;
	var controlPoint2X;
	var controlPoint2Y;
	if (window.devicePixelRatio)
		resolution = window.devicePixelRatio;
	else
		resolution = 1.0;
	resolution *= 0.5 * (canvas.width / kClipperz_PM_UI_Canvas_Marks_exclamationMarkWidth + canvas.height / kClipperz_PM_UI_Canvas_Marks_exclamationMarkHeight);
	
	context.save();
	context.scale(canvas.width / kClipperz_PM_UI_Canvas_Marks_exclamationMarkWidth, canvas.height / kClipperz_PM_UI_Canvas_Marks_exclamationMarkHeight);
	context.clearRect(0.0, 0.0, kClipperz_PM_UI_Canvas_Marks_exclamationMarkWidth, kClipperz_PM_UI_Canvas_Marks_exclamationMarkHeight);
	
	// Layer 1
	
	alignStroke = 0.0;
	context.beginPath();
	pointX = 26.499;
	pointY = 10.848;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.moveTo(pointX, pointY);
	pointX = 20.887;
	pointY = 11.584;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	controlPoint1X = 25.395;
	controlPoint1Y = 10.802;
	controlPoint1X = (Math.round(resolution * controlPoint1X + alignStroke) - alignStroke) / resolution;
	controlPoint1Y = (Math.round(resolution * controlPoint1Y + alignStroke) - alignStroke) / resolution;
	controlPoint2X = 22.175;
	controlPoint2Y = 11.078;
	controlPoint2X = (Math.round(resolution * controlPoint2X + alignStroke) - alignStroke) / resolution;
	controlPoint2Y = (Math.round(resolution * controlPoint2Y + alignStroke) - alignStroke) / resolution;
	context.bezierCurveTo(controlPoint1X, controlPoint1Y, controlPoint2X, controlPoint2Y, pointX, pointY);
	pointX = 20.013;
	pointY = 13.194;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	controlPoint1X = 20.335;
	controlPoint1Y = 11.814;
	controlPoint1X = (Math.round(resolution * controlPoint1X + alignStroke) - alignStroke) / resolution;
	controlPoint1Y = (Math.round(resolution * controlPoint1Y + alignStroke) - alignStroke) / resolution;
	controlPoint2X = 19.921;
	controlPoint2Y = 12.826;
	controlPoint2X = (Math.round(resolution * controlPoint2X + alignStroke) - alignStroke) / resolution;
	controlPoint2Y = (Math.round(resolution * controlPoint2Y + alignStroke) - alignStroke) / resolution;
	context.bezierCurveTo(controlPoint1X, controlPoint1Y, controlPoint2X, controlPoint2Y, pointX, pointY);
	pointX = 23.049;
	pointY = 28.788;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	controlPoint1X = 20.243;
	controlPoint1Y = 15.448;
	controlPoint1X = (Math.round(resolution * controlPoint1X + alignStroke) - alignStroke) / resolution;
	controlPoint1Y = (Math.round(resolution * controlPoint1Y + alignStroke) - alignStroke) / resolution;
	controlPoint2X = 22.589;
	controlPoint2Y = 26.35;
	controlPoint2X = (Math.round(resolution * controlPoint2X + alignStroke) - alignStroke) / resolution;
	controlPoint2Y = (Math.round(resolution * controlPoint2Y + alignStroke) - alignStroke) / resolution;
	context.bezierCurveTo(controlPoint1X, controlPoint1Y, controlPoint2X, controlPoint2Y, pointX, pointY);
	pointX = 25.027;
	pointY = 29.156;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	controlPoint1X = 23.279;
	controlPoint1Y = 29.018;
	controlPoint1X = (Math.round(resolution * controlPoint1X + alignStroke) - alignStroke) / resolution;
	controlPoint1Y = (Math.round(resolution * controlPoint1Y + alignStroke) - alignStroke) / resolution;
	controlPoint2X = 24.705;
	controlPoint2Y = 29.202;
	controlPoint2X = (Math.round(resolution * controlPoint2X + alignStroke) - alignStroke) / resolution;
	controlPoint2Y = (Math.round(resolution * controlPoint2Y + alignStroke) - alignStroke) / resolution;
	context.bezierCurveTo(controlPoint1X, controlPoint1Y, controlPoint2X, controlPoint2Y, pointX, pointY);
	pointX = 27.971;
	pointY = 11.354;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	controlPoint1X = 25.809;
	controlPoint1Y = 25.384;
	controlPoint1X = (Math.round(resolution * controlPoint1X + alignStroke) - alignStroke) / resolution;
	controlPoint1Y = (Math.round(resolution * controlPoint1Y + alignStroke) - alignStroke) / resolution;
	controlPoint2X = 27.971;
	controlPoint2Y = 12.826;
	controlPoint2X = (Math.round(resolution * controlPoint2X + alignStroke) - alignStroke) / resolution;
	controlPoint2Y = (Math.round(resolution * controlPoint2Y + alignStroke) - alignStroke) / resolution;
	context.bezierCurveTo(controlPoint1X, controlPoint1Y, controlPoint2X, controlPoint2Y, pointX, pointY);
	pointX = 26.499;
	pointY = 10.848;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	controlPoint1X = 27.557;
	controlPoint1Y = 11.032;
	controlPoint1X = (Math.round(resolution * controlPoint1X + alignStroke) - alignStroke) / resolution;
	controlPoint1Y = (Math.round(resolution * controlPoint1Y + alignStroke) - alignStroke) / resolution;
	controlPoint2X = 26.913;
	controlPoint2Y = 10.848;
	controlPoint2X = (Math.round(resolution * controlPoint2X + alignStroke) - alignStroke) / resolution;
	controlPoint2Y = (Math.round(resolution * controlPoint2Y + alignStroke) - alignStroke) / resolution;
	context.bezierCurveTo(controlPoint1X, controlPoint1Y, controlPoint2X, controlPoint2Y, pointX, pointY);
	pointX = 26.499;
	pointY = 10.848;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	context.closePath();
	pointX = 24.337;
	pointY = 31.962;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.moveTo(pointX, pointY);
	pointX = 21.899;
	pointY = 32.882;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	controlPoint1X = 23.463;
	controlPoint1Y = 31.962;
	controlPoint1X = (Math.round(resolution * controlPoint1X + alignStroke) - alignStroke) / resolution;
	controlPoint1Y = (Math.round(resolution * controlPoint1Y + alignStroke) - alignStroke) / resolution;
	controlPoint2X = 22.589;
	controlPoint2Y = 32.284;
	controlPoint2X = (Math.round(resolution * controlPoint2X + alignStroke) - alignStroke) / resolution;
	controlPoint2Y = (Math.round(resolution * controlPoint2Y + alignStroke) - alignStroke) / resolution;
	context.bezierCurveTo(controlPoint1X, controlPoint1Y, controlPoint2X, controlPoint2Y, pointX, pointY);
	pointX = 20.703;
	pointY = 35.458;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	controlPoint1X = 21.163;
	controlPoint1Y = 33.572;
	controlPoint1X = (Math.round(resolution * controlPoint1X + alignStroke) - alignStroke) / resolution;
	controlPoint1Y = (Math.round(resolution * controlPoint1Y + alignStroke) - alignStroke) / resolution;
	controlPoint2X = 20.703;
	controlPoint2Y = 34.538;
	controlPoint2X = (Math.round(resolution * controlPoint2X + alignStroke) - alignStroke) / resolution;
	controlPoint2Y = (Math.round(resolution * controlPoint2Y + alignStroke) - alignStroke) / resolution;
	context.bezierCurveTo(controlPoint1X, controlPoint1Y, controlPoint2X, controlPoint2Y, pointX, pointY);
	pointX = 21.669;
	pointY = 38.08;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	controlPoint1X = 20.703;
	controlPoint1Y = 36.47;
	controlPoint1X = (Math.round(resolution * controlPoint1X + alignStroke) - alignStroke) / resolution;
	controlPoint1Y = (Math.round(resolution * controlPoint1Y + alignStroke) - alignStroke) / resolution;
	controlPoint2X = 20.979;
	controlPoint2Y = 37.344;
	controlPoint2X = (Math.round(resolution * controlPoint2X + alignStroke) - alignStroke) / resolution;
	controlPoint2Y = (Math.round(resolution * controlPoint2Y + alignStroke) - alignStroke) / resolution;
	context.bezierCurveTo(controlPoint1X, controlPoint1Y, controlPoint2X, controlPoint2Y, pointX, pointY);
	pointX = 24.015;
	pointY = 39.0;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	controlPoint1X = 22.405;
	controlPoint1Y = 38.77;
	controlPoint1X = (Math.round(resolution * controlPoint1X + alignStroke) - alignStroke) / resolution;
	controlPoint1Y = (Math.round(resolution * controlPoint1Y + alignStroke) - alignStroke) / resolution;
	controlPoint2X = 23.325;
	controlPoint2Y = 39.0;
	controlPoint2X = (Math.round(resolution * controlPoint2X + alignStroke) - alignStroke) / resolution;
	controlPoint2Y = (Math.round(resolution * controlPoint2Y + alignStroke) - alignStroke) / resolution;
	context.bezierCurveTo(controlPoint1X, controlPoint1Y, controlPoint2X, controlPoint2Y, pointX, pointY);
	pointX = 26.821;
	pointY = 38.034;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	controlPoint1X = 25.073;
	controlPoint1Y = 39.0;
	controlPoint1X = (Math.round(resolution * controlPoint1X + alignStroke) - alignStroke) / resolution;
	controlPoint1Y = (Math.round(resolution * controlPoint1Y + alignStroke) - alignStroke) / resolution;
	controlPoint2X = 26.131;
	controlPoint2Y = 38.724;
	controlPoint2X = (Math.round(resolution * controlPoint2X + alignStroke) - alignStroke) / resolution;
	controlPoint2Y = (Math.round(resolution * controlPoint2Y + alignStroke) - alignStroke) / resolution;
	context.bezierCurveTo(controlPoint1X, controlPoint1Y, controlPoint2X, controlPoint2Y, pointX, pointY);
	pointX = 27.833;
	pointY = 35.55;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	controlPoint1X = 27.465;
	controlPoint1Y = 37.344;
	controlPoint1X = (Math.round(resolution * controlPoint1X + alignStroke) - alignStroke) / resolution;
	controlPoint1Y = (Math.round(resolution * controlPoint1Y + alignStroke) - alignStroke) / resolution;
	controlPoint2X = 27.833;
	controlPoint2Y = 36.194;
	controlPoint2X = (Math.round(resolution * controlPoint2X + alignStroke) - alignStroke) / resolution;
	controlPoint2Y = (Math.round(resolution * controlPoint2Y + alignStroke) - alignStroke) / resolution;
	context.bezierCurveTo(controlPoint1X, controlPoint1Y, controlPoint2X, controlPoint2Y, pointX, pointY);
	pointX = 26.683;
	pointY = 32.744;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	controlPoint1X = 27.833;
	controlPoint1Y = 34.676;
	controlPoint1X = (Math.round(resolution * controlPoint1X + alignStroke) - alignStroke) / resolution;
	controlPoint1Y = (Math.round(resolution * controlPoint1Y + alignStroke) - alignStroke) / resolution;
	controlPoint2X = 27.557;
	controlPoint2Y = 33.572;
	controlPoint2X = (Math.round(resolution * controlPoint2X + alignStroke) - alignStroke) / resolution;
	controlPoint2Y = (Math.round(resolution * controlPoint2Y + alignStroke) - alignStroke) / resolution;
	context.bezierCurveTo(controlPoint1X, controlPoint1Y, controlPoint2X, controlPoint2Y, pointX, pointY);
	pointX = 24.337;
	pointY = 31.962;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	controlPoint1X = 26.085;
	controlPoint1Y = 32.238;
	controlPoint1X = (Math.round(resolution * controlPoint1X + alignStroke) - alignStroke) / resolution;
	controlPoint1Y = (Math.round(resolution * controlPoint1Y + alignStroke) - alignStroke) / resolution;
	controlPoint2X = 25.211;
	controlPoint2Y = 31.962;
	controlPoint2X = (Math.round(resolution * controlPoint2X + alignStroke) - alignStroke) / resolution;
	controlPoint2Y = (Math.round(resolution * controlPoint2Y + alignStroke) - alignStroke) / resolution;
	context.bezierCurveTo(controlPoint1X, controlPoint1Y, controlPoint2X, controlPoint2Y, pointX, pointY);
	pointX = 24.337;
	pointY = 31.962;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	context.closePath();
	pointX = 30.639;
	pointY = 38.402;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.moveTo(pointX, pointY);
	context.fillStyle = aColor;
	context.fill();
	
	context.restore();
}