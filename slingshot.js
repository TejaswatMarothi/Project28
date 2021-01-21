class Slingshot{
	constructor(body,anchor)
	{
		
		var options={ bodyA:body,			 
			pointB:anchor, 
			stiffness:0.004, 
			length:1
			
		}
		
		this.bodyA=body
		this.pointB=anchor
		this.Sling=Constraint.create(options)
		World.add(world,this.Sling)
	}

	attach(body){
		this.Sling.bodyA=body;
	}

	fly()
	{
		this.Sling.bodyA=null;
	}

	display()
	{
		if(this.Sling.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}