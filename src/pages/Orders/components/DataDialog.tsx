import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Order } from "@/interfaces";
import { Search } from "lucide-react";

interface DataDialogProps {
  order: Order;
}

export function DataDialog({ order }: DataDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="p-2 h-auto">
          <Search className="w-3 h-3 text-primary" />
        </Button>
      </DialogTrigger>

      <DialogContent className="w-[91.5%]">
        <DialogHeader>
          <DialogTitle>Pedido</DialogTitle>

          <DialogDescription>
            Veja as informações do pedido aqui.
          </DialogDescription>
        </DialogHeader>

        <div>
          <Label>Identificador</Label>
          <Input value={order.id} disabled />
        </div>
        <div>
          <Label>Realizado há</Label>
          <Input value={`há ${order.finishedAt} minutos`} disabled />
        </div>
        <div>
          <Label>Status</Label>
          <Input value={order.status} disabled />
        </div>
        <div>
          <Label>Cliente</Label>
          <Input value={order.clientName} disabled />
        </div>
        <div>
          <Label>Total</Label>
          <Input value={`R$ ${order.total},00`} disabled />
        </div>
      </DialogContent>
    </Dialog>
  );
}
